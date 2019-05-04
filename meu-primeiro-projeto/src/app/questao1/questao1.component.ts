import { Component} from '@angular/core';

@Component({
  selector: 'app-questao1',
  templateUrl: './questao1.component.html',
  styleUrls: ['./questao1.component.css']
})


export class Questao1Component {

   frase: string;

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
    if (this.ehFibonacci(x)) {
      this.frase = 'é de FIBONACCI';
    } else {
      this.frase = 'NÂO É DE FIBONACCI';
    }
  }
}