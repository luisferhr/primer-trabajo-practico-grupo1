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




