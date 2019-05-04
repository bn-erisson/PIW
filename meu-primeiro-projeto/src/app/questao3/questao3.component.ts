import { Component} from '@angular/core';

@Component({
  selector: 'app-questao3',
  templateUrl: './questao3.component.html',
  styleUrls: ['./questao3.component.css']
})
export class Questao3Component {

  nome: string;
  media: number;
  situcao: string;

  aprovadoOuReprovado(nota1: number, nota2: number): boolean {
    console.log(typeof nota1);
    console.log(typeof nota2);
    //this.media = (parseInt(nota1) + parseInt(nota2)) / 2;
    console.log(this.media);
    if (this.media >= 7) {
      this.situcao = 'APROVADO';
      console.log('Aluno Aprovado');
      return true;
    } else {
      this.situcao = 'REPROVADO';
      console.log('Aluno Reprovado');
      return false;
    }
  }

  adicionarAluno(nome: string, media: number, situacao: string){
    nome = this.nome;
    media = this.media;
    situacao = this.situcao;

    // let aluno {nome : }

  }

}