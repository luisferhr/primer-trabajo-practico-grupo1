const botonesVerMas = document.querySelectorAll(".botoncurso");

botonesVerMas.forEach((boton) => {
  boton.addEventListener("click", function () {
    const contenedor = this.parentElement;
    const texto = contenedor.querySelector(".info");

    if (texto.style.display === "none" || texto.style.display === "") {
      texto.style.display = "block";
    } else {
      texto.style.display = "none";
    }
  });
});