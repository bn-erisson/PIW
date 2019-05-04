import { Component } from '@angular/core';
import { IAluno } from 'src/app/model/IAluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent {

  alunos:IAluno[] = [
                  {id:0,nome:"Jefferson de Carvalho"},
                  {id:1,nome:"Getúlio Vargas"}
                ];
  contador:number = 2;
  adicionar(nome:string){
    this.alunos.push(
      {id:this.contador++,nome:nome}
    )
  }

  atualizar(aluno:IAluno){
    let a = this.consultar(aluno.id);
    if(a!=null){
      a.nome = aluno.nome;
    }
  }

  listar():IAluno[]{
    return this.alunos;
  }

  excluir(id:number){
    let index = 0;
    for(let a of this.alunos){
      if(a.id==id) break;
      index++;
    }
    this.alunos.splice(index,1);
  }

  consultar(id:number):IAluno{
    for(let a of this.alunos){
      if(a.id==id) return a;
    }
    return null;
  }

}
