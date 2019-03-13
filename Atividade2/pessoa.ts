class Pessoa{
    private nome: string;
    private data: Date;
    private altura: number;
    private dataAtu : Date;

    public constructor(nome: string, data: Date, altura: number, dataAtu: Date){
        this.nome = nome;
        this.data = data;
        this.altura = altura;
        this.dataAtu = dataAtu;
    }

    public getNome(): string{
        return this.nome;
    }

    public SetNome(nome:string) : void{
        this.nome = nome;
    }

    public getData() : Date{
        return this.data;
    }

    public setData(data : Date) : void{
        this.data = data;
    }

    public getAltura() : number{
        return this.altura;
    }

    public setAltura(altura : number) : void{
        this.altura = altura;
    }

    public CalcularData(): number{
        let umDiaEmMiliSegundos = 1000*60*60*24;
        let dataNasMs = this.data.getTime();
        let dataAtuMs = this.dataAtu.getTime();
        let diferenca = dataAtuMs - dataNasMs;
        let result = Math.round(diferenca/umDiaEmMiliSegundos/365);
        return result
        };
};

let Pessoa1 : Pessoa = new Pessoa("Erisson", new Date("12-10-1998"),1.71, new Date(Date.now()));



console.log(Pessoa1.CalcularData());

//===================================================================================

class Elevador{
    andarAtu : number;
    totalDeAndares : number;
    capacidadeDoElevador : number;
    QuantidadeDePessoa
}