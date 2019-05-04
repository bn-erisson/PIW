import { Component } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent {

  id = 0;

  posts = [];

  adicionarpost(nomeInput: string, textoInput: string) {
    this.id ++;
    let post = { id: this.id, nome: nomeInput, texto: textoInput};
    this.posts.push(post);
    console.log(this.posts);
  }

  findPost(id : number): any{
    for (let post of this.posts){
    if (post.id==id) { 
    return post;
    }
    }
    return null;
  }

  AdicionarLike

}
