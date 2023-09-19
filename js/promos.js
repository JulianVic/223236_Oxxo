document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al elemento del carrusel
    const carrusel = document.getElementById("promociones");
  
    // Obtén las diapositivas del carrusel
    const slides = carrusel.querySelectorAll(".carousel-item");
  
    // Inicializa el índice de la diapositiva actual
    let currentIndex = 0;
  
    // Función para mostrar la siguiente diapositiva
    function mostrarSiguienteDiapositiva() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }
  
    // Función para mostrar la diapositiva anterior
    function mostrarDiapositivaAnterior() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      slides[currentIndex].classList.add("active");
    }
  
    // Agrega event listeners para los controles del carrusel
    const btnPrev = carrusel.querySelector(".carousel-control-prev");
    const btnNext = carrusel.querySelector(".carousel-control-next");
  
    btnPrev.addEventListener("click", mostrarDiapositivaAnterior);
    btnNext.addEventListener("click", mostrarSiguienteDiapositiva);
  
    // Configura un temporizador para cambiar automáticamente las diapositivas cada 5 segundos
    setInterval(mostrarSiguienteDiapositiva, 5000);
  });
  