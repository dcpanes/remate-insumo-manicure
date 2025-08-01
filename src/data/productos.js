// Arreglo de productos para manicure
export const productos = [
  {
    id: 1,
    nombre: "Esmalte Base",
    precio: 15000,
    cantidad: 25,
    imagen: "https://via.placeholder.com/300x200/f093fb/white?text=Esmalte+Base",
    descripcion: "Base protectora para uñas, ideal para preparar las uñas antes del color."
  },
  {
    id: 2,
    nombre: "Esmalte Color Rojo",
    precio: 12000,
    cantidad: 18,
    imagen: "https://via.placeholder.com/300x200/dc2626/white?text=Esmalte+Rojo",
    descripcion: "Esmalte rojo vibrante de larga duración, perfecto para cualquier ocasión."
  },
  {
    id: 3,
    nombre: "Top Coat Brillante",
    precio: 18000,
    cantidad: 22,
    imagen: "https://via.placeholder.com/300x200/10b981/white?text=Top+Coat",
    descripcion: "Sellador transparente que da brillo y protege el esmalte."
  },
  {
    id: 4,
    nombre: "Lima de Uñas Professional",
    precio: 8000,
    cantidad: 35,
    imagen: "https://via.placeholder.com/300x200/6366f1/white?text=Lima+de+Uñas",
    descripcion: "Lima profesional de doble cara, perfecta para dar forma a las uñas."
  },
  {
    id: 5,
    nombre: "Acetona Sin Olor",
    precio: 6000,
    cantidad: 40,
    imagen: "https://via.placeholder.com/300x200/3b82f6/white?text=Acetona",
    descripcion: "Acetona sin olor para remover esmalte sin dañar las uñas."
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

🛍️ *${producto.nombre}*
💰 Precio: ${formatearPrecio(producto.precio)}
📦 Disponible: ${producto.cantidad} unidades

${producto.descripcion}

¿Podrías darme más información sobre disponibilidad y formas de pago?

¡Gracias!`;

  return encodeURIComponent(mensaje);
};
