// Controlador para la gestión de pedidos (commands).
const prisma = require('../../db/prismaClient');

exports.createCommand = async (req, res) => {
  const { userId, dishes } = req.body; // dishes: [{ dishId: <id>, quantity: <qty> }]
  if (!userId || !dishes || !Array.isArray(dishes) || dishes.length === 0) {
    return res.status(400).json({ message: 'User ID and dishes are required' });
  }

  try {
    const command = await prisma.$transaction(async (prisma) => {
      // 1. Crear la comanda
      const newCommand = await prisma.command.create({
        data: {
          userId: parseInt(userId), // Asegúrate de que userId sea un BigInt
        },
      });

      // 2. Crear los ítems de la comanda
      const commandDishesData = dishes.map(item => ({
        commandId: newCommand.id,
        dishId: parseInt(item.dishId), // Asegúrate de que dishId sea un BigInt
        quantity: item.quantity,
      }));

      await prisma.commandDish.createMany({
        data: commandDishesData,
      });

      return newCommand;
    });

    res.status(201).json({ message: 'Command created successfully', commandId: command.id });
  } catch (err) {
    console.error('Error creating command:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

exports.getUserCommands = async (req, res) => {
  const { userId } = req.params;
  try {
    const commands = await prisma.command.findMany({
      where: { userId: parseInt(userId) },
      include: {
        commandDishes: {
          include: {
            dish: true, // Incluye los detalles del plato
          },
        },
        user: true, // Incluye los detalles del usuario
      },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(commands);
  } catch (err) {
    console.error('Error fetching user commands:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
