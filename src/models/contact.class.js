export class ContactClass {
    nombre = '';
    apellido = '';
    email = '';
    conected = false

    constructor(nombre, apellido, email,conected){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conected = conected
    }
} 