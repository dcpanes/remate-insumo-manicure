// Arreglo de productos para manicure
// Base path para assets públicos
const BASE_PATH = '/remate-insumo-manicure';

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
    imagen: `${BASE_PATH}/images/4.jpg`,
    descripcion: "COLOR MOODS : 6 POLVOS DE 7g cada uno"
  },
  {
    id: 5,
    nombre: "Coleccion polvos x 6 PASTELES LEGACY NAILS",
    precio: 9000,
    cantidad: 1,
    imagen: `${BASE_PATH}/images/5.jpg`,
    descripcion: "Coleccion Pasteles : 6 polvos de 7g cada uno"
  },
  {
    id: 6,
    nombre: "Coleccion polvos x 6 COSMIC LEGACY NAILS",
    precio: 9000,
    cantidad: 1,
    imagen: "https://i.ebayimg.com/images/g/Yd8AAOSwkZhl0R0t/s-l1600.webp",
    descripcion: "Coleccion cosmic: 6 polvos de 7g cada uno."
  },
  {
    id: 7,
    nombre: "Coleccion polvos x 6 CAKE POP LEGACY NAILS",
    precio: 9000,
    cantidad: 1,
    imagen: "https://www.beautystore.cl/wp-content/uploads/2020/06/cakepops-Web-Format.jpg",
    descripcion: "Coleccion cake pop: 6 polvos de 7g cada uno."
  },
  {
    id: 8,
    nombre: "LEGACY NAILS POLVO ACRILICO 30g",
    precio: 4500,
    cantidad: 2,
    imagen: "https://www.beautystore.cl/wp-content/uploads/2020/06/30-gr-white.jpg",
    descripcion: "Polvo acrilico blanco, 30g"
  },
  {
    id: 9,
    nombre: "LEGACY NAILS POLVO ACRILICO BLANCO 56g",
    precio: 5500,
    cantidad: 2,
    imagen: "https://www.beautystore.cl/wp-content/uploads/2020/06/56gr.jpg",
    descripcion: "Polvo acrilico blanco, 56g"
  },
  {
    id: 10,
    nombre: "LEGACY NAILS POLVO ACRILICO BRIGHT COVER 56g",
    precio: 5500,
    cantidad: 3,
    imagen: "https://www.beautystore.cl/wp-content/uploads/2020/06/Bright-Cover-Cream-web-format-945x1024.jpg",
    descripcion: "Polvo acrilico bright cover (glitter), 56g"
  },
  {
    id: 11,
    nombre: "LEGACY NAILS POLVO ACRILICO BABY WHITE 56g",
    precio: 5500,
    cantidad: 5,
    imagen: "https://www.beautystore.cl/wp-content/uploads/2020/06/White-cover-2-oz-Web-format-1-1-945x1024.jpg",
    descripcion: "Polvo acrilico baby white (para baby boomer) 56g"
  },
  {
    id: 12,
    nombre: "MIA SECRET NAIL PREP DESHIDRATADOR 15ML",
    precio: 4000,
    cantidad: 17,
    imagen: "https://www.beautystore.cl/wp-content/uploads/2019/04/nail-prep.jpg",
    descripcion: "DESHIDRATADOR 15ML"
  },
  {
    id: 13,
    nombre: "MIA SECRET XTRABOND 15ML",
    precio: 4000,
    cantidad: 1,
    imagen: "https://www.beautystore.cl/wp-content/uploads/2019/05/xtrabond.png",
    descripcion: "PRIMER 15ML"
  },
  {
    id: 14,
    nombre: "MIA SECRET XTRABOND 30ML",
    precio: 6000,
    cantidad: 1,
    imagen: "https://www.beautystore.cl/wp-content/uploads/2019/05/xtrabond-1.png",
    descripcion: "PRIMER 30ML"
  },
  {
    id: 15,
    nombre: "MIA SECRET UV FINISH TOP GEL 15ML",
    precio: 7500,
    cantidad: 14,
    imagen: "https://nailartstore.cl/wp-content/uploads/2023/05/IMG_20220223_142503-768x763.webp",
    descripcion: "TOP GEL PARA UÑAS ACRILICAS 15ML"
  },
  {
    id: 16,
    nombre: "MIA SECRET TOP RUBBER 15ML",
    precio: 7500,
    cantidad: 1,
    imagen: "https://static.wixstatic.com/media/07e5b3_fb4d0bb7b0f84b3189abd0ef7f8f1b22~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07e5b3_fb4d0bb7b0f84b3189abd0ef7f8f1b22~mv2.jpg",
    descripcion: "TOP RUBBER SELLADOR 15ML"
  },
];


// Función para formatear precio

// Función para generar mensaje de WhatsApp
export const generarMensajeWhatsApp = (producto) => {
  const mensaje = `¡Hola! Estoy interesado(a) en el siguiente producto:

🛍️ ${producto.nombre}
💰 Precio: ${producto.precio}

¿Podrías darme más información sobre disponibilidad y formas de pago?

¡Gracias!`;

  return encodeURIComponent(mensaje);
};