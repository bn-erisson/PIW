//Erisson Bezerra Nunes
//402876
// Ps: Ta BEEEM imcompleto e cheio de erros :/


abstract class Conta{
    public tipoDeConta : string;
    public saldo: number;
    public numeroDeConta: string;
    public taxaSelic : number = 0.08;

    public constructor(saldo: number, numeroDeConta: string){
        this.saldo = saldo;
        this.numeroDeConta = numeroDeConta;
    }

    public depositar(quantia:number){
        this.saldo += quantia;
    }

    public sacar(quantia:number):boolean {
        if (quantia > this.saldo){
            console.log("Saldo insuficiente")
            return false
        }
        else {
            this.saldo -= quantia;
            return true
        }
    }
    // metodo abstrato
    abstract valorisar();

}

interface IcontaRende {
    gerarRelatorio()
}

class ContaCorrente extends Conta{
    public sacar(quantia:number) : boolean {
        let quantiaTx : number = quantia + 2;
        return super.sacar(quantiaTx);
    }

    valorisar(){
        console.log("não valorisa");
    }
};

class ContaPoupança extends Conta implements IcontaRende{
    public sacar(quantia:number) : boolean{
        let quantiaTx : number = quantia + 0.02 * quantia;
        return super.sacar(quantiaTx);
    }

    valorisar(){
        this.saldo += this.saldo * 0.02;
    }

    gerarRelatorio(){
        console.log("INVESTIMENTO");
        console.log("Numero: " + this.numeroDeConta);
        console.log("Saldo: " + this.saldo);
        console.log("redimento: " + this.saldo*1+this.taxaSelic);
    }
};

class ContaInvestimento extends Conta{

    public sacar(quantia : number) : boolean{
        let quantiaTx : number = quantia + 0.05 * quantia + 10
        return super.sacar(quantia);
    }

    valorisar(){
        this.saldo += this.saldo * this.taxaSelic;
    }
};

let cc : Conta = new ContaCorrente(100.00, "402876")
