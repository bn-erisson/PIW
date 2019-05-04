
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent{

  nome = 'Jefferson de Carvalho';
  clicou = false;
  contador = 0;

  @Output() pessoaSalva = new EventEmitter;

  salvar(nomeInput: string){
    this.nome = nomeInput;
    this.contador++;
    this.clicou = true;
    let pTemp = {nome:this.nome,id:this.contador};
    this.pessoaSalva.emit(pTemp);
    /*this.pessoas.push({nome:this.nome,
                       id:this.contador});*/
  }

}


