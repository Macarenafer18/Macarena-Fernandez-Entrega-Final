const socialIcons = document.querySelectorAll(".social-icon");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});

// Espera a que el contenido de la página esté cargado
window.addEventListener("DOMContentLoaded", (event) => {
  // Agrega la clase 'active' para iniciar la animación
  document.querySelector(".fade-in").classList.add("active");
});

const h1Tilt = document.querySelector(".h1-tilt");
const h5Tilt = document.querySelectorAll(".h5-tilt");

h1Tilt.addEventListener("mouseenter", () => {
  h1Tilt.classList.add("tilt-left");
});

h1Tilt.addEventListener("mouseleave", () => {
  h1Tilt.classList.remove("tilt-left");
});

h5Tilt.forEach((h5) => {
  h5.addEventListener("mouseenter", () => {
    const mouseX = event.clientX - h5.getBoundingClientRect().left;
    if (mouseX < h5.offsetWidth / 2) {
      h5.classList.add("tilt-left");
    } else {
      h5.classList.add("tilt-right");
    }
  });

  h5.addEventListener("mouseleave", () => {
    h5.classList.remove("tilt-left", "tilt-right");
  });
});
