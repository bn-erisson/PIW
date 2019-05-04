import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-da-linha',
  templateUrl: './post-da-linha.component.html',
  styleUrls: ['./post-da-linha.component.css']
})
export class PostDaLinhaComponent {

  @Input() post: any;

  @Output() idpost = new EventEmitter;

  lancarId(id: number){
    this.idpost.emit(id);
  }


}
