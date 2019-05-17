import { UserService } from './../../services/user.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user-component',
  templateUrl: './register-user-component.component.html',
  styleUrls: ['./register-user-component.component.css']
})
export class RegisterUserComponentComponent implements OnInit {

  user: User;

  constructor( private UserService: UserService) {
    this.user = new User();
   }

  ngOnInit() {
  }

  onSubmit() {
    this.UserService.register(this.user).subscribe(
      (res: User) => {
        console.log(`User id ${res.id} added!`);
      }
    );
  }

}
