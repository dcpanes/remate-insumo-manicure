// Configuración
const numeroWhatsApp = "56948930101";

// Cache para productos
let productosCache = null;

// Función para formatear precio en el cliente
const formatearPrecio = (precio) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(precio);
};

// Función para generar mensaje de WhatsApp
const generarMensajeWhatsApp = (producto) => {
  const mensaje = `¡Hola! Estoy interesado(a) en el siguiente producto:

🛍️ *${producto.nombre}*
💰 Precio: ${formatearPrecio(producto.precio)}
📦 Disponible: ${producto.cantidad} unidades

${producto.descripcion}

¿Podrías darme más información sobre disponibilidad y formas de pago?

¡Gracias!`;

  return encodeURIComponent(mensaje);
};

// Función para abrir WhatsApp
const abrirWhatsApp = (mensaje) => {
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Función debounced para mejorar rendimiento
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Función para cargar productos de forma lazy
const cargarProductos = async () => {
  if (productosCache) return productosCache;
  
  try {
    // En este caso los productos están inline, pero podrían venir de una API
    const { productos } = await import('/src/data/productos.js');
    productosCache = productos;
    return productos;
  } catch (error) {
    console.error('Error cargando productos:', error);
    return [];
  }
};

// Inicialización optimizada
const inicializar = async () => {
  const productos = await cargarProductos();
  
  // Event delegation para mejor rendimiento
  document.addEventListener('click', async (event) => {
    const target = event.target;
    
    // Botones de WhatsApp para productos específicos
    if (target.matches('.btn-whatsapp')) {
      event.preventDefault();
      
      const productoIdAttr = target.getAttribute('data-producto-id');
      if (productoIdAttr) {
        const productoId = parseInt(productoIdAttr);
        const producto = productos.find(p => p.id === productoId);
        
        if (producto) {
          const mensaje = generarMensajeWhatsApp(producto);
          abrirWhatsApp(mensaje);
        }
      }
      return;
    }
    
    // Botón de contacto general
    if (target.matches('#btn-contact-general')) {
      event.preventDefault();
      
      const mensajeGeneral = encodeURIComponent(`¡Hola! Estoy interesado(a) en conocer más sobre sus productos de manicure y precios para compra al por mayor.

¿Podrían proporcionarme información detallada?

¡Gracias!`);
      abrirWhatsApp(mensajeGeneral);
    }
  });
  
  // Optimizar carga de imágenes
  optimizarImagenes();
};

// Función para optimizar imágenes
const optimizarImagenes = () => {
  // Intersection Observer para lazy loading más eficiente
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  // Observar todas las imágenes lazy
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });

  // Precargar imágenes críticas
  const imagenesVisibles = document.querySelectorAll('.producto-imagen');
  imagenesVisibles.forEach((img, index) => {
    // Solo precargar las primeras 3 imágenes
    if (index < 3) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src;
      document.head.appendChild(link);
    }
  });
};

// Event listeners optimizados
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializar);
} else {
  inicializar();
}

// Service Worker para caching (opcional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(err => console.log('SW registration failed'));
  });
}
