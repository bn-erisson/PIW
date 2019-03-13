var Pessoa = /** @class */ (function () {
    function Pessoa(nome, data, altura, dataAtu) {
        this.nome = nome;
        this.data = data;
        this.altura = altura;
        this.dataAtu = dataAtu;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.SetNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getData = function () {
        return this.data;
    };
    Pessoa.prototype.setData = function (data) {
        this.data = data;
    };
    Pessoa.prototype.getAltura = function () {
        return this.altura;
    };
    Pessoa.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    Pessoa.prototype.CalcularData = function () {
        var umDiaEmMiliSegundos = 1000 * 60 * 60 * 24;
        var dataNasMs = this.data.getTime();
        var dataAtuMs = this.dataAtu.getTime();
        var diferenca = dataAtuMs - dataNasMs;
        console.log(umDiaEmMiliSegundos);
        console.log(dataNasMs);
        console.log(dataAtuMs);
        console.log(diferenca);
        var result = Math.round(diferenca / umDiaEmMiliSegundos / 365);
        return result;
    };
    ;
    return Pessoa;
}());
;
var Pessoa1 = new Pessoa("Erisson", new Date("12-10-1998"), 1.71, new Date(Date.now()));
console.log(Pessoa1.CalcularData());
