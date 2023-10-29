formulario = document.getElementById("miFormulario")

function validarNumeroTelefono(numero) {
    var regex = /^\d{9}$/;

    if (regex.test(numero)) {
        return true; 
    } else {
        return false; 
    }
}

function esEmailValido(email) {
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regexEmail.test(email);
}

formulario.addEventListener("submit", function(event){

    event.preventDefault();
    console.log(event)

    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let telefono = document.getElementById('telefono');
    let email = document.getElementById("email");
    let zona = document.getElementById('zona');
    let tamano = document.getElementById('tamano').value;
    let descripcion = document.getElementById('descripcion');

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

    if (nombre.value.length >= 3) {
        if (edad.value >= 18) {
            if (validarNumeroTelefono(telefono.value)) {
                if (esEmailValido(email.value)) {
                    if (zona.value.length >= 5) {
                        if (tipo.length > 1) {
                            console.log("Nombre: " + nombre.value);
                            console.log("Edad: " + edad.value);
                            console.log("Telefono: " + telefono.value);
                            console.log("Email: " + email.value);
                            console.log("Zona: " + zona.value); 
                            console.log("Tamaño: " + tamano + " cm");
                            console.log("Descripcion: " + descripcion.value);
                            console.log("Tipo de Tatuaje: " + tipo);
                            
                            let formData = new FormData();
                            formData.append("nombre", nombre.value);
                            formData.append("edad", edad.value);
                            formData.append("telefono", telefono.value);
                            formData.append("email", email.value);
                            formData.append("zona", zona.value);
                            formData.append("tamano", tamano);
                            formData.append("descripcion", descripcion.value);
                            formData.append("tipo", tipo);

                            fetch(formulario.action, {
                                method: "POST",
                                body: formData
                            })

                            alert(`Gracia ${nombre.value}, tu solicitud de cotizacion fue enviada exitosamente, nuestro equipo se pondrá en contacto contigo lo más pronto posible.`)

                            formulario.reset();
                            window.location.href = 'main.html';

                        } else {
                            alert('Seleccione el tipo de color del tatuaje');
                        }
                    } else {
                        alert('Describa una zona del cuerpo');
                        zona.focus();
                    }
                } else {
                    alert('Escriba un email válido');
                    email.focus();
                }
            } else {
                alert('Ingrese un teléfono correcto del formato 912345678 (9 dígitos)');
                telefono.focus();
            }
        } else if (edad.value < 18 && edad.value > 0) {
            alert('Debe ser mayor de edad para poder cotizar por un tatuaje');
            edad.focus();
        } else {
            alert('Ingrese una edad válida');
            edad.focus();
        }
    } else {
        alert('Ingrese un nombre válido');
        nombre.focus();
    }
});
