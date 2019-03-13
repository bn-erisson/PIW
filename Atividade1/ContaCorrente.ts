import {conta} from "./Conta";

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

    public rendimento():number{
        
    } 


} 

//let conta1 = new conta (2.99, "223344") 

//console.log(conta1.getRelatorio("contax","223344",2.98,3))