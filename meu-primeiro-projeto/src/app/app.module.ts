import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { InvertidorComponent } from './invertidor/invertidor.component';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PessoaCardComponent } from './pessoa-card/pessoa-card.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeadComponent,
    ContentComponent,
    FooterComponent,
    InvertidorComponent,
    DatepickerPopupComponent,
    PessoaCardComponent,
    PessoaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
