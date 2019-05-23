import { LoginUserComponent } from './core/login-user/login-user.component';
import { ListUserComponent } from './core/list-user/list-user.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponentComponent } from './core/register-user-component/register-user-component.component';
import { EditUserComponent } from './core/edit-user/edit-user.component';
import { ListarProdutoComponent } from './core/listar-produto/listar-produto.component';
import { RegistrarProdutoComponent } from './core/registrar-produto/registrar-produto.component';

const routes: Routes = [
  {path: '', component: ListarProdutoComponent},
  {path: 'list/user', component: ListUserComponent},
  {path: 'register/user', component: RegisterUserComponentComponent},
  {path: 'edit/user/:id', component: EditUserComponent},
  {path: 'listar/produto', component: ListarProdutoComponent},
  {path: 'registrar/produto', component: RegistrarProdutoComponent}
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
