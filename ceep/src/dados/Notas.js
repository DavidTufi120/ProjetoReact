export default class ArrayDeNotas {

    constructor() {

        this.notas = [];
        this._inscritos =[];
        this.notificar();
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Notas(titulo,texto,categoria);
        this.notas.push(novaNota);
        this.notificar();

    }

    apagarNotas(indice){
        this.notas.splice(indice,1);
        this.notificar();
    }

    inscrever(func) {
      
        this._inscritos.push(func);
      
        }
      
        notificar(){
            this._inscritos.forEach(func=>{
                
              func(this.notas);
      
            });
      
        }
}

class Notas {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;

    }

}