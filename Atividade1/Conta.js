"use strict";
//Erisson Bezerra Nunes
//402876
// Ps: Ta BEEEM imcompleto e cheio de erros :/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Conta = /** @class */ (function () {
    function Conta(saldo, numeroDeConta) {
        this.saldo = saldo;
        this.numeroDeConta = numeroDeConta;
    }
    Conta.prototype.depositar = function (quantia) {
        this.saldo += quantia;
    };
    Conta.prototype.saquar = function (quantia) {
        if (quantia > this.saldo) {
            console.log("Saldo insuficiente");
            return false;
        }
        else {
            this.saldo -= quantia;
            return true;
        }
    };
    return Conta;
}());
exports.Conta = Conta;
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.saquar = function (quantia) {
        quantia = quantia + 2;
        if (quantia > this.saldo) {
            console.log("Saldo insuficiente");
            return false;
        }
        else {
            this.saldo -= quantia;
            return true;
        }
    };
    return ContaCorrente;
}(Conta));
;
var ContaPoupança = /** @class */ (function (_super) {
    __extends(ContaPoupança, _super);
    function ContaPoupança() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContaPoupança;
}(Conta));
;
var ContaInvestimento = /** @class */ (function (_super) {
    __extends(ContaInvestimento, _super);
    function ContaInvestimento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContaInvestimento;
}(Conta));
;
