import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlunoModule } from './aluno/aluno.module';

@NgModule({
  declarations: [
    AppComponent,
//     HelloComponent,
//     HeadComponent,
//     ContentComponent,
//     FooterComponent,
//     InvertidorComponent,
//     DatepickerPopupComponent,
//     PessoaCardComponent,
//     PessoaFormComponent,
//     LinhaDoTempoComponent,
//     PostDaLinhaComponent,
//     ColoridoDirective,
//     Questao1Component,
//     Questao2Component,
//     Questao3Component,
//     Questao4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//     FormsModule,
//     NgbModule,
    AlunoModule,
//    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

 export class AppModule { }

// import { AlunoModule } from './aluno/aluno.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello/hello.component';
// import { HeadComponent } from './head/head.component';
// import { ContentComponent } from './content/content.component';
// import { FooterComponent } from './footer/footer.component';
// import { from } from 'rxjs';
// import { InvertidorComponent } from './invertidor/invertidor.component';
// import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { PessoaCardComponent } from './pessoa-card/pessoa-card.component';
// import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
// import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
// import { PostDaLinhaComponent } from './post-da-linha/post-da-linha.component';
// import { ColoridoDirective } from './colorido.directive';
// import { Questao1Component } from './questao1/questao1.component';
// import { Questao2Component } from './questao2/questao2.component';
// import { Questao3Component } from './questao3/questao3.component';
// import { Questao4Component } from './questao4/questao4.component';
// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HelloComponent,
//     HeadComponent,
//     ContentComponent,
//     FooterComponent,
//     InvertidorComponent,
//     DatepickerPopupComponent,
//     PessoaCardComponent,
//     PessoaFormComponent,
//     LinhaDoTempoComponent,
//     PostDaLinhaComponent,
//     ColoridoDirective,
//     Questao1Component,
//     Questao2Component,
//     Questao3Component,
//     Questao4Component,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     NgbModule,
//     AlunoModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
