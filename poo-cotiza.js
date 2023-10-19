class usuario{
    constructor(nombre, telefono, email){
        this._nombre = nombre;
        this._telefono = telefono;
        this._email = email;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get telefono(){
        return this._telefono;
    }

    set telefono(telefono){
        this._telefono = telefono;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    imprimirDatos() {
        console.log(`DATOS: 
                    Nombre: ${this._nombre}.
                    Telefono: ${this._telefono}.
                    Email: ${this._email}`)
    }
}