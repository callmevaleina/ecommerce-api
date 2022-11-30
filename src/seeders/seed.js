const db = require("../utils/database");
const initModels = require("../models/initModels");
const { forEach } = require("p-iteration");
const { User,Product,Order,ProductInCart,ProductInOrder,Cart  } = require("../models");

initModels();

const user = [
  {
    username: "Valentina",
    email: "valee@gmail.com",
    password: "1234Hola",
  },
  {
    username: "Pedro",
    email: "pedro@gmail.com",
    password: "5678Bye",
  },
  {
    username: "Candelaria",
    email: "candelita@gmail.com",
    password: "09123Sunshine",
  },
  {
    username: "Olivia",
    email: "olivia@gmail.com",
    password: "Mylove3004",
  },
  {
    username: "Gabriela",
    email: "gabriela@gmail.com",
    password: "Mom6789",
  }
];

const product = [
  {
    name: "Giorgio Armani Acqua Di Gio",
    price: 120,
    productImage: 'https://www.fuschia.com.py/public/9bce20fcab2fd5c01537acf036f84f12.jpg',
    availableQty: 30,
    status: true,
    userId: 1
  },
  {
    name: "Elizabeth Arden Untold",
    price: 76,
    productImage: 'https://www.fuschia.com.py/public/71bc7c-ELIZABETH_ARDEN_UNTOLD_EAU_FRAICHE_EDT_100ML.jpg',
    availableQty: 20,
    status: true,
    userId: 2
  },
  {
    name: "Hugo Boss Jour Pour Femme",
    price: 95,
    productImage: 'https://www.fuschia.com.py/public/3a6177a85e3e3ac0f970df99e687371b.jpg',
    availableQty: 15,
    status: true,
    userId: 3
  },
  {
    name: "Jeanne Arthes Cassandra Rosses Blanches",
    price: 12,
    productImage: 'https://www.fuschia.com.py/public/c87c00-Sena_Prod_-Recuperado_0003s_0035_3430750042949_JEANNE_ARTHES_CASSANDRA_ROSSES_BLANCHES_EDP_100_ML.jpg',
    availableQty: 10,
    status: true,
    userId: 4
  },
  {
    name: "Versace Bright Crystal",
    price: 147,
    productImage: 'https://www.fuschia.com.py/public/864fa4600f8ff3bf97a22113a72b8981.jpg',
    availableQty: 25,
    status: true,
    userId: 1
  },
  ,
  {
    name: "Davidoff Cool Water Woman",
    price: 63,
    productImage: 'https://www.fuschia.com.py/public/8eea3dce9c5d161fab74ee848c809680.jpg',
    availableQty: 20,
    status: true,
    userId: 1
  },

];

const order = [
  {
    totalPrice: 0,
    userId:1,
    status: true,
  },
  {
    totalPrice: 0,
    userId:2,
    status: true,
  },
  {
    totalPrice: 0,
    userId:3,
    status: true,
  },
];

const cart =[
  {
    totalPrice: 0,
    userId: 1,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 2,
    status: true,
  }, {
    totalPrice: 0,
    userId: 3,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 4,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 5,
    status: true,
  },
  
];

const productInCart = [
  {
    cartId: 1,
    productId: 6,
    quantity: 1,
    price: 0,
    status: true
  },
  {
    cartId: 2,
    productId: 2,
    quantity: 1,
    price: 0,
    status: true
  }
];

const productInOrder = [
  {
    orderId:1,  
    productId:1,
    quantity: 2,
    price: 0,
    status:false
  },
  {
    orderId:2,
    productId:4,
    quantity:3,
    price:0,
    status:false
  },
  {
    orderId:3,
    productId:6,
    quantity: 1,
    price: 0,
    status:false
  },
  
];

async function seeding(){
  await db.sync({force: true})

  await forEach(user, (user)=> User.create(user))
  await forEach(product, (product)=> Product.create(product))
  await forEach(cart, (cart)=> Cart.create(cart))
  await forEach(order, (order)=> Order.create(order))
  await forEach(productInCart, (pic) => ProductInCart.create(pic))
  await forEach(productInOrder, (pio)=> ProductInOrder.create(pio))
  
};
seeding();
