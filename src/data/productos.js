// Arreglo de productos para manicure
export const productos = [
  {
    id: 1,
    nombre: "MIA SECRET POLVO ACRILICO 15g VARIEDADES",
    precio: 3900,
    cantidad: 30,
    imagen: "https://miasecretstore.com/cdn/shop/products/a1d8f759.jpg?v=1657913021&width=1214",
    descripcion: "colores: natural Pink,Blanco, Cover Almond, Cover nude Blush, Cover beige, cover Golden,."
  },
  {
    id: 2,
    nombre: "MIA SECRET POLVO ACRILICO 30g VARIEDADES",
    precio: 5900,
    cantidad: 25,
    imagen: "https://miasecretstore.com/cdn/shop/products/PL420-FP.jpg?v=1657929641&width=900",
    descripcion: "Colores: Frosted Pink,Cover Beige,Cover golden,Cover nude blush, Blanco y Natural pink"
  },
  {
    id: 3,
    nombre: "MIA SECRET POLVO ACRILICO 59h VARIEDADES",
    precio: 9500,
    cantidad: 26,
    imagen: "https://miasecretstore.com/cdn/shop/products/PL430-CM.jpg?v=1657913021&width=900",
    descripcion: "Colores: Frosted pink,Cover nude blush, cover beige, blanco, cover peach, cover golden."
  },
  {
    id: 4,
    nombre: "Coleccion polvos x 6 MOODS LEGACY NAILS ",
    precio: 9000,
    cantidad: 1,
    imagen: "https://legacynailsinc.com/wp-content/uploads/2018/11/Color-chart-Moods-1.jpg",
    descripcion: "COLOR MOODS : 6 POLVOS DE 7g cada uno"
  },
  {
    id: 5,
    nombre: "Coleccion polvos x 6 PASTELES LEGACY NAILS",
    precio: 9000,
    cantidad: 1,
    imagen: "https://legacynailsinc.com/wp-content/uploads/2019/07/Color-chart-Pasteles.jpg",
    descripcion: "Coleccion Pasteles : 6 polvos de 7g cada uno"
  },
  {
    id: 6,
    nombre: "Cortauñas de Acero",
    precio: 25000,
    cantidad: 12,
    imagen: "https://via.placeholder.com/300x200/64748b/white?text=Cortauñas",
    descripcion: "Cortauñas de acero inoxidable, resistente y de precisión."
  },
  {
    id: 7,
    nombre: "Quitacutículas",
    precio: 22000,
    cantidad: 15,
    imagen: "https://via.placeholder.com/300x200/8b5cf6/white?text=Quitacutículas",
    descripcion: "Herramienta profesional para el cuidado de cutículas."
  },
  {
    id: 8,
    nombre: "Kit de Decoración",
    precio: 35000,
    cantidad: 8,
    imagen: "https://via.placeholder.com/300x200/f59e0b/white?text=Kit+Decoración",
    descripcion: "Kit completo con herramientas para nail art y decoración de uñas."
  }
];

// Función para agregar un nuevo producto
export const agregarProducto = (nuevoProducto) => {
  const id = Math.max(...productos.map(p => p.id)) + 1;
  productos.push({ ...nuevoProducto, id });
  return productos;
};

// Función para obtener producto por ID
export const obtenerProductoPorId = (id) => {
  return productos.find(producto => producto.id === id);
};

// Función para formatear precio
export const formatearPrecio = (precio) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(precio);
};

// Función para generar mensaje de WhatsApp
export const generarMensajeWhatsApp = (producto) => {
  const mensaje = `¡Hola! Estoy interesado(a) en el siguiente producto:

🛍️ ${producto.nombre}
💰 Precio: ${formatearPrecio(producto.precio)}
📦 Disponible: ${producto.cantidad} unidades

${producto.descripcion}

¿Podrías darme más información sobre disponibilidad y formas de pago?

¡Gracias!`;

  return encodeURIComponent(mensaje);
};