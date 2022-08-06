export class Persona {
    id?: number;
    nombre: string; apellido: string; comentario: string;
  
/*     fechaNac: Date; edad: number; telefono: string;
    ciudad: string; email: string;  titulo: string;

    constructor( nombre: string, apellido: string, comentario: string, fechaNac: Date, edad: number, 
        telefono: string, ciudad: string, web: string, 
        email: string, titulo: string ) {

        this.nombre = nombre; this.apellido= apellido;
        this.comentario = comentario; this.web = web;
        this.fechaNac = fechaNac;
        this.edad = edad;
        this.telefono = telefono;
        this.ciudad = ciudad;
        
        this.email = email;
        this.titulo = titulo;
    }  */
 
    constructor( nombre: string, apellido: string,  comentario: string ) {
        this.nombre = nombre;
        this.apellido= apellido;
        this.comentario = comentario;
    }
}
