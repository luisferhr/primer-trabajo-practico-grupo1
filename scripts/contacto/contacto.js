miFormularioContacto = document.getElementById("miFormularioContacto")

miFormularioContacto.addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let descripcion = document.getElementById('descripcion').value;

    console.log("Nombre: " + nombre);
    console.log("Apellido: " + telefono);
    console.log("Email: " + email);
    console.log("Asunto: " + asunto);
    console.log("Descripcion: " + descripcion)

    let datosContacto = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        asunto: asunto,
        descripcion: descripcion
    };

    let datosContactoJSON = JSON.stringify(datosContacto);

    miFormularioContacto.reset();
})


