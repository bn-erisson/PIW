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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeadComponent,
    ContentComponent,
    FooterComponent,
    InvertidorComponent,
    DatepickerPopupComponent
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
