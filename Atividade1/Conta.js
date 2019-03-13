"use strict";
exports.__esModule = true;
var conta = /** @class */ (function () {
    function conta(saldo, numeroDeConta) {
        this.saldo = saldo;
        this.numeroDeConta = numeroDeConta;
    }
    conta.prototype.getRelatorio = function (tipoDeConta, numeroDeConta, saldo, rendimento) {
        var relatorio;
        relatorio = "Seu relatorio: " + "\n" + "Tipo de conta : " + tipoDeConta + "\n" +
            "Numero de conta: " + numeroDeConta + "\n" +
            "Saldo de conta: " + saldo + "\n" +
            "Rendimento: " + rendimento;
        return relatorio;
    };
    conta.prototype.rendimento = function (saldo) {
    };
    conta.prototype.deposito = function (valor) {
        saldo: this.saldo + valor;
    };
    return conta;
}());
exports.conta = conta;
//let conta1 = new conta (2.99, "223344") 
console.log(conta1.getRelatorio("contax", "223344", 2.98, 3));
