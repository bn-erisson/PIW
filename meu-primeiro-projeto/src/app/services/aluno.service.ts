import { Aluno } from './../model/IAluno';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AlunoService {
  alunos: Aluno[] = [
    {id: 0, nome: 'Julia'},
    {id: 1, nome: 'Billy'}
   ];

contador: number = 2;

  constructor() { }

  adicionar(nome: string) {
    this.alunos.push({ id:this.contador++,nome:nome}
      );
  }

  atualizar(aluno: Aluno){
    let a = this.consultar(aluno.id);
    if (a!=null){
        a.nome = aluno.nome;
    }
  }

  listar(): Aluno[]{
    return this.alunos;

  }

  excluir(id: number){
    let index = 0;
    for (let a of this.alunos){
      if (a.id==id) break;
      index++;
      }
      this.alunos.splice(index,1);
  }

  consultar(id:number){
    for (let a of this.alunos){
      if (a.id==id) return a;
    }
    return null;
  }
}
