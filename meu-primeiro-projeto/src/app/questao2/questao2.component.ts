import { Component } from '@angular/core';

@Component({
  selector: 'app-questao2',
  templateUrl: './questao2.component.html',
  styleUrls: ['./questao2.component.css']
})

export class Questao2Component {

  frase: string;
  clicou = false;

 ehFibonacci(x: number): boolean {
   let a: number;
   let b: number;
   let c: number;
   a = b = 1;
   do {
     c = a + b;
     a = b;
     b = c;
   }while (c < x);
   //console.log(c == x);
   return c == x;
 }

 mostrarFrase(x: number): any{
  this.clicou = true;
  if (this.ehFibonacci(x)) {
    this.frase = 'é de FIBONACCI';
  } else {
    this.frase = 'NÂO É DE FIBONACCI';
   }
 }
}
