import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RegisterUserComponentComponent } from './register-user-component/register-user-component.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginUserComponent } from './login-user/login-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { RegistrarProdutoComponent } from './registrar-produto/registrar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

@NgModule({
  declarations: [RegisterUserComponentComponent, ListUserComponent, EditUserComponent, LoginUserComponent, ListarProdutoComponent, RegistrarProdutoComponent, EditarProdutoComponent],
  exports: [RegisterUserComponentComponent, ListUserComponent,LoginUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ]
})
export class CoreModule { }
