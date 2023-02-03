export class Todo {


    constructor(tarea) {

        this.tarea = tarea;

        this.id         =new Date().getTime(); //122345676
        this.completado = false;
        this.creado     = new Date(); 

    }
}