formulario = document.getElementById("miFormulario")

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;

    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Email: " + email);

    formulario.reset();
})