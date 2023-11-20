class Cuenta{
    #titular="alex";
    #saldo=0;
    constructor(){};
 //getter
 get getTitular(){return this.#titular};
 get getSaldo(){return this.#saldo};




    //metod
    ingresar (importe){
        this.#saldo=this.#saldo + importe;
        console.log(this.#saldo);
    }
    extraer (extraccion){
        this.#saldo=this.#saldo - extraccion;
    }
    informar(){
        return document.write(`<p>estado de cuenta: ${this.#saldo}</p>`)
    }
}
let user = new Cuenta();

document.write(`<p>${user.getTitular}</p>`);
document.write(`<p>${user.getSaldo}</p>`);

user.ingresar(50);
user.informar();
user.extraer(20);
user.informar();