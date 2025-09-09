// Controlador para operaciones de autenticación/usuario.
const prisma = require('../../db/prismaClient');

exports.registerUser = async (req, res) => {
  const { firstname, lastname, address, zipcode, email } = req.body;
  if (!firstname || !lastname || !email || !zipcode) {
    return res.status(400).json({ message: 'First name, last name, email, and zipcode are required' });
  }
  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        address,
        zipcode,
        email,
      },
    });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    console.error('Error registering user:', err);
    if (err.code === 'P2002') { // Unique constraint violation (email already exists)
      return res.status(409).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getUserByEmail = async (req, res) => {
  const { email } = req.params; // Usamos email para la búsqueda, ya que es UNIQUE
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
