//Erisson Bezerra Nunes
//402876
// Ps: Ta BEEEM imcompleto e cheio de erros :/


export abstract class conta{
    public tipoDeConta : string;
    public saldo: number;
    public numeroDeConta: string;

    public constructor(saldo: number, numeroDeConta: string){
        this.saldo = saldo;
        this.numeroDeConta = numeroDeConta;
    }

    public abstract getRelatorio(): { // não é pra isso estar aqui
       
    }

    public abstract imposto(): {
    }

    public abstract deposito(): {

    }

    public abstract saque(): {

    }

    public abstract rentimento(): {

    }
    
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class contaCorrente extends conta{

    public tipoDeConta : string;
    public saldo: number;
    public numeroDeConta: string;

    public constructor (saldo: number, numeroDeConta: string){
        super(saldo,numeroDeConta);

    }

    
    public getRelatorio(tipoDeConta: string, numeroDeConta:string, saldo: number, rendimento:number ): string{
        let relatorio : string;
        relatorio = "Seu relatorio: " + "\n" + "Tipo de conta : " + tipoDeConta + "\n" + 
        "Numero de conta: " + numeroDeConta + "\n" +
        "Saldo de conta: " + saldo + "\n" +
        "Rendimento: " + rendimento;

        return relatorio;
    }

    public imposto(saque:number):number{
        
        let imposto = saque - 2;
        return imposto;
    }

    public deposito(valor:number):string{
        this.saldo = this.saldo = valor;

    }

    public saque(valor:number):string{
        let saque : number = valor - imposto();

    }

    public rendimento():number{
        
    } 


} 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class contaPoupança extends conta{

    public tipoDeConta : string;
    public saldo: number;
    public numeroDeConta: string;

    public constructor (saldo: number, numeroDeConta: string){
        super(saldo,numeroDeConta);

    }
    
    public 


}
