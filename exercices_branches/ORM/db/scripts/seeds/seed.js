const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {



  await prisma.commandDish.deleteMany();
  await prisma.command.deleteMany();
  await prisma.menuDish.deleteMany();
  await prisma.menu.deleteMany();
  await prisma.dish.deleteMany();
  await prisma.user.deleteMany();


// 1. Crear un usuario con upsert para evitar duplicados
  const user = await prisma.user.upsert({
    where: { email: "ada@code.com" },
    update: {},
    create: {
      firstname: "Ada",
      lastname: "Lovelace",
      address: "123 Binary Street",
      zipcode: "01001",
      email: "ada@code.com"
    }
  });



  // 1. Crear platos (Dishes)
  const dishes = await prisma.dish.createMany({
    data: [
      {
        name: "Hello World Burger",
        description: "Un cheeseburger classique (pain, steak, fromage, salade, sauce).",
        ingredients: "Pain, steak, fromage, salade, sauce"
      },
      {
        name: "404 Not Found Fries",
        description: "Des frites maison avec une sauce mystère.",
        ingredients: "Pommes de terre, huile, sauce mystère"
      },
      {
        name: "JSON Nuggets",
        description: "Nuggets de poulet avec 3 sauces au choix.",
        ingredients: "Poulet, ketchup, mayo, barbecue"
      },
      {
        name: "Git Pull Tacos",
        description: "Un taco simple avec poulet, salade, fromage et sauce.",
        ingredients: "Tortilla, poulet, salade, fromage, sauce"
      },
      {
        name: "Front-end Salad",
        description: "Salade avec tomates, feta et vinaigrette.",
        ingredients: "Tomates, feta, vinaigrette"
      },
      {
        name: "Back-End Brownie",
        description: "Brownie moelleux au chocolat.",
        ingredients: "Chocolat, beurre, farine, œufs"
      },
      {
        name: "Full Stack Menu",
        description: "Combo burger, frites et boisson.",
        ingredients: "Burger, frites, boisson"
      }
    ]
  });

  console.log("Filas insertadas:", dishes.count);
 

   // 3. Crear un menú con platos conectados por id
  // Primero obtener ids de platos
  const burger = await prisma.dish.findUnique({ where: { name: "Hello World Burger" } });
  const salad = await prisma.dish.findUnique({ where: { name: "Front-end Salad" } });
  const brownie = await prisma.dish.findUnique({ where: { name: "Back-End Brownie" } });

  const menu = await prisma.menu.create({
    data: {
      name: "Menu du Jour",
      description: "Un menu équilibré pour développeurs affamés",
      menuDishes: {
        create: [
          { dish: { connect: { id: burger.id } } },
          { dish: { connect: { id: salad.id } } },
          { dish: { connect: { id: brownie.id } } }
        ]
      }
    }
  });



  // 4. Crear una orden (Command) conectando al usuario y platos
  const command = await prisma.command.create({
    data: {
      user: { connect: { id: user.id } },
      commandDishes: {
        create: [
          { dish: { connect: { name : "Hello World Burger" } }, quantity: 2 },
          { dish: { connect: { name: "404 Not Found Fries" } }, quantity: 1 },
          { dish: { connect: { name: "JSON Nuggets" } }, quantity: 1 }
        ]
      }
    }
  });

   // 6. Relacionar platos a la orden (command_dishes)
  await prisma.commandDish.createMany({
    data: [
      { commandId: 1, dishId: 1, quantity: 2 },
      { commandId: 1, dishId: 2, quantity: 1 }
    ]
  });

  console.log('Seed data inserted ✅');
}

main()
  .then(() => {
    console.log('🌱 Seed completado');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
