document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const enviarBtn = document.getElementById("enviarBtn");
  const miAlert = document.getElementById("miAlert");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Aquí puedes agregar el código para enviar los datos del formulario al servidor si es necesario

    // Muestra el alert
    miAlert.style.display = "block";

    // Puedes agregar más acciones aquí, como restablecer el formulario
  });
});
