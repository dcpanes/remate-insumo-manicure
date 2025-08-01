// Utilidad para optimizar imágenes en tiempo real
export class ImageOptimizer {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    // Configurar Intersection Observer para lazy loading
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage(entry.target);
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );

    // Observar imágenes existentes
    this.observeImages();
  }

  observeImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => this.observer.observe(img));
  }

  loadImage(img) {
    // Crear una nueva imagen para precargar
    const imageLoader = new Image();
    
    imageLoader.onload = () => {
      img.src = imageLoader.src;
      img.removeAttribute('data-src');
      img.classList.add('loaded');
    };

    imageLoader.onerror = () => {
      console.warn('Error loading image:', img.dataset.src);
      img.classList.add('error');
    };

    imageLoader.src = img.dataset.src;
  }

  // Método para añadir nuevas imágenes dinámicamente
  addImage(imgElement) {
    if (this.observer && imgElement.dataset.src) {
      this.observer.observe(imgElement);
    }
  }

  // Precargar imágenes críticas
  preloadCriticalImages() {
    const criticalImages = document.querySelectorAll('img[data-critical="true"]');
    criticalImages.forEach((img, index) => {
      // Solo precargar las primeras 3 imágenes críticas
      if (index < 3) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src || img.dataset.src;
        document.head.appendChild(link);
      }
    });
  }

  // Optimizar imágenes con WebP si es compatible
  supportsWebP() {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  async convertToWebP(imageSrc) {
    const supportsWebP = await this.supportsWebP();
    if (supportsWebP && !imageSrc.includes('.webp')) {
      // En un entorno real, esto podría convertir automáticamente
      // Por ahora, solo retornamos la URL original
      return imageSrc;
    }
    return imageSrc;
  }

  // Cleanup cuando se destruye el componente
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Auto-inicializar cuando se carga el DOM
if (typeof window !== 'undefined') {
  let imageOptimizer;
  
  const initImageOptimizer = () => {
    imageOptimizer = new ImageOptimizer();
    imageOptimizer.preloadCriticalImages();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageOptimizer);
  } else {
    initImageOptimizer();
  }

  // Exportar para uso global
  window.ImageOptimizer = ImageOptimizer;
}
