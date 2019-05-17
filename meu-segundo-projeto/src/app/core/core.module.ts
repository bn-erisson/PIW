import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RegisterUserComponentComponent } from './register-user-component/register-user-component.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [RegisterUserComponentComponent, ListUserComponent, EditUserComponent],
  exports: [RegisterUserComponentComponent, ListUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
