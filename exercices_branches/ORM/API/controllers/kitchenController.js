const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.getPendingCommands = async (req, res) => {
  try {
    const commands = await prisma.command.findMany({
      where: {
        // En tu esquema, no hay un campo 'status'. Si quieres un status,
        // deberías añadirlo a la tabla 'commands'.
        // Por ahora, asumimos que todas las 'commands' son "pendientes"
        // hasta que se "completan" (lo que requeriría un campo de estado).
        // Si necesitas un estado, deberías añadir 'status String' a tu modelo Command en schema.prisma.
        // Ejemplo si tuvieras un campo de estado:
        // status: 'En preparación',
      },
      include: {
        user: true, // Incluye el usuario que hizo el pedido
        commandDishes: {
          include: {
            dish: true, // Incluye los detalles de cada plato
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    });
    res.status(200).json(commands);
  } catch (err) {
    console.error('Error fetching pending commands:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// NOTA: Para implementar "prête" y "annuler la commande",
// necesitarás añadir un campo `status` al modelo `Command` en `schema.prisma`.
// Por ejemplo: `status String @default("En préparation")`
// Luego, puedes usarlo así:
exports.updateCommandStatus = async (req, res) => {
  const { commandId } = req.params;
  const { status } = req.body; // 'prête' o 'annulée'

  // Validar si el status es válido (requiere que el campo 'status' exista en el modelo Command)
  if (!status || !['En préparation', 'prête', 'annulée', 'livrée'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status provided. Required: "En préparation", "prête", "annulée", "livrée"' });
  }

  try {
    const updatedCommand = await prisma.command.update({
      where: { id: parseInt(commandId) },
      data: { status, updatedAt: new Date() },
    });
    res.status(200).json({ message: `Command ${commandId} updated to ${status}`, command: updatedCommand });
  } catch (err) {
    console.error('Error updating command status:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
