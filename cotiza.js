formulario = document.getElementById("miFormulario")

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById('telefono').value
    let email = document.getElementById("email").value;
    let zona = document.getElementById('zona').value;
    let tamano = document.getElementById('tamano').value;
    let descripcion = document.getElementById('descripcion').value;

    let tipo = "";
    if(document.getElementById("b-g").checked){
        tipo = "Blanco y Negro"
    }
    else if(document.getElementById("detallesColor").checked){
        tipo = "Detalles con Color"
    }
    else if(document.getElementById("color").checked){
        tipo = "Full Color"
    }

    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Telefono: " + telefono);
    console.log("Email: " + email);
    console.log("Zona: " + zona);
    console.log("Tamaño: " + tamano + " cm");
    console.log("Descripcion: " + descripcion);
    console.log("Tipo de Tatuaje: " + tipo)


    formulario.reset();
})