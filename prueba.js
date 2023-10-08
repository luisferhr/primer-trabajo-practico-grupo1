class Estudiante{
    constructor(nombre, apellido, edad, email){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }

    printDatos(){
        console.log(`Nombre: ${this.nombre} \nApellido ${this.apellido}\nEdad: ${this.edad}\nEmail: ${this.email}`)
    }
}

Ana = new Estudiante("Ana", "Perez", 25, 'anaperez@mail.com')
Luis = new Estudiante("Luis", "Hernandez", 35, 'luishernandez@mail.com')

students = [Luis, Ana]

localStorage.setItem('Datos', students)









// var numbers = [];

// for (let i = 0; i < 10; i++) {
//     if(i % 2 == 0 & i >=1){
//         numbers.push(i)  
//     }   
// }

// console.log(numbers)

// for (number of numbers){
//     console.log(number)
// }