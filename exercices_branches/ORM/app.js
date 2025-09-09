// Archivo principal de la aplicación Express.
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const usersRoutes = require('./api/routes/users');
const menuRoutes = require('./api/routes/menu');
const orderRoutes = require('./api/routes/order');
const kitchenRoutes = require('./api/routes/kitchen');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Parsea los cuerpos de las peticiones JSON

// Rutas
app.use('/api/users', usersRoutes);
app.use('/api/menu', menuRoutes); // Los dishes ahora son los "items del menú"
app.use('/api/orders', orderRoutes); // Las commands son los "orders"
app.use('/api/kitchen', kitchenRoutes);

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal en el servidor!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
