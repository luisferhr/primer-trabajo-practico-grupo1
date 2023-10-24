miFormularioContacto = document.getElementById("miFormularioContacto")

function validarNumeroTelefono(numero) {
    // Define una expresión regular que coincide con un número de teléfono en formato (123) 456-7890
    var regex = /^\d{9}$/;

    // Usamos el método test de la expresión regular para verificar si el número coincide
    if (regex.test(numero)) {
        return true; // El número de teléfono es válido
    } else {
        return false; // El número de teléfono no es válido
    }
}

function esEmailValido(email) {
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regexEmail.test(email);
}

miFormularioContacto.addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre"); 
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    let asunto = document.getElementById("asunto");
    let descripcion = document.getElementById('descripcion');

    if(nombre.value.length >= 3){
        if(validarNumeroTelefono(telefono.value)){
            if(esEmailValido(email.value)){
                if(asunto.value.length >= 5){
                    if(descripcion.value.length >= 5){
                        console.log("Nombre: " + nombre.value);
                        console.log("Apellido: " + telefono.value);
                        console.log("Email: " + email.value);
                        console.log("Asunto: " + asunto.value);
                        console.log("Descripcion: " + descripcion.value)
                    
                        miFormularioContacto.reset();
                    }
                    else{
                        alert('Complete campo Descripcion. ')
                        descripcion.focus()
                    }

                }
                else{
                    alert('Describa el asunto.')
                    asunto.focus()
                }

            }
            else {
                alert('Describa un email valido')
                email.focus()
            }

        }
        else{
            alert('Describa un numero telefonico correcto. (9 digitos) 912345678')
        }
    }
    else{
        alert('Ingrese su nombre')
        nombre.focus()
    }
    
})


