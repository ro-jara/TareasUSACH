const products = [
  { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
  { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
  { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
  { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
  { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
  { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];

const productosConDescuento = products.filter(p => p.discount > 0);
console.log("Productos con descuento:", productosConDescuento);

const productosPrecioFinal = productosConDescuento.map(p => ({
  ...p,
  priceAfterDiscount: p.price * (1 - p.discount / 100)
}));

console.log("Productos con precio final:", productosPrecioFinal);

const productosStockBajo = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].stock < 5) {
    productosStockBajo.push(products[i]);
  }
}

console.log("Productos con stock bajo:", productosStockBajo);

function actualizarStock(nombreProducto, cantidad) {
  try {
    const producto = products.find(p => p.name.toLowerCase() === nombreProducto.toLowerCase());

    if (!producto) {
      throw new Error(`Producto "${nombreProducto}" no encontrado.`);
    }

    producto.stock += cantidad;
    console.log(`Stock actualizado de ${producto.name}. Nuevo stock: ${producto.stock}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}


function resumenPorCategoria(arr) {
  const resumen = {};

  for (let producto of arr) {
    const cat = producto.category;

    if (!resumen[cat]) {
      resumen[cat] = 1;
    } else {
      resumen[cat]++;
    }
  }

  return resumen;
}

console.log("Resumen por categoría:", resumenPorCategoria(products));
