// Controlador para la gestión de platos (dishes) que actúan como ítems del menú.
const prisma = require('../../db/prismaClient');

exports.getDishes = async (req, res) => {
  try {
    const dishes = await prisma.dish.findMany({
      orderBy: { name: 'asc' },
    });
    res.status(200).json(dishes);
  } catch (err) {
    console.error('Error fetching dishes:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addDish = async (req, res) => {
  const { name, description, ingredients } = req.body;
  if (!name || !description || !ingredients) {
    return res.status(400).json({ message: 'Name, description, and ingredients are required' });
  }
  try {
    const dish = await prisma.dish.create({
      data: {
        name,
        description,
        ingredients,
      },
    });
    res.status(201).json({ message: 'Dish added successfully', dish });
  } catch (err) {
    console.error('Error adding dish:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
