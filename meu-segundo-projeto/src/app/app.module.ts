import { ListUserComponent } from './core/list-user/list-user.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponentComponent } from './core/register-user-component/register-user-component.component';
import { EditUserComponent } from './core/edit-user/edit-user.component';

const routes: Routes = [
  {path: '', component: RegisterUserComponentComponent},
  {path: 'list/user', component: ListUserComponent},
  {path: 'register/user', component: RegisterUserComponentComponent},
  {path: 'edit/user/:id', component: EditUserComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
