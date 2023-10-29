miFormularioContacto = document.getElementById("miFormularioContacto")

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
                        console.log("Telefono: " + telefono.value);
                        console.log("Email: " + email.value);
                        console.log("Asunto: " + asunto.value);
                        console.log("Descripcion: " + descripcion.value)
                    
                        let formData = new FormData();
                            formData.append("nombre", nombre.value);
                            formData.append("telefono", telefono.value);
                            formData.append("email", email.value);
                            formData.append("asunto", asunto.value);
                            formData.append("descripcion", descripcion.value);

                        alert(`Gracia ${nombre.value}, tus comentarios fueron enviados exitosamente, nuestro equipo se pondrá en contacto contigo lo más pronto posible.`)

                        fetch(miFormularioContacto.action, {
                            method: "POST",
                            body: formData
                        })

                        miFormularioContacto.reset();
                        window.location.href = 'main.html';
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




