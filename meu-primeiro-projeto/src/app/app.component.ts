
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nome = "Jefferson de Carvalho";

  salvar(nomeInput:string){
    this.nome = nomeInput;
  }

  mudar(event:any){
    this.nome = event.target.value;
  }
  
}


















// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   nome = 'Betinna';
//   idade = 22;
//   saldo = 1042000;



//   salvar(nomeInput:any) {
//     this.nome = nomeInput;
//     this.nome = 'Betinnnna ' + this.idade;
//     this.idade++;
//    }

//   mudar(evento:any) {
//     this.nome = evento.target.value;
//   }

// }
