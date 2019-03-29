import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invertidor',
  templateUrl: './invertidor.component.html',
  styleUrls: ['./invertidor.component.css']
})
export class InvertidorComponent {

  alerta = 'primary';
  mostra = false;

  ehPrimo(x: number): boolean {

    for (let index: number = 2; index < x; index++) {
      if((x%index) == 0.0) return false;
    }
    return true;

  }

  ehPar(x:number):boolean {
    if(x%2==0) return true;
    return false;
  }


  iBettMyMoney(dia: number, mes: number, ano: number, investimento: number): number {
    let total = 0;

    if ( this.ehPrimo(dia) == true ) {
      investimento = investimento * -1;
      total += investimento;
    } else {
      investimento = investimento * 2;
      total += investimento;
    }

    if ( this.ehPar(mes) == true ) {
      mes = mes * 10;
      total = total * mes;
    } else {
      mes = mes * 100;
      total = total * mes;
    }

    investimento = investimento * ano;
    investimento = investimento * 22;

    total = total * investimento;

    if(investimento < 0) {
      this.alerta = "danger";
    }
    console.log(total);
    return total;

    

  }

  


}
