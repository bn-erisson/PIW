import { UserService } from './../../services/user.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = new User();

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    // o que inicia isso? como ele pega o id, de onde ele pega?
    let id = this.activatedRoute.snapshot.params['id'];

    this.userService.retrieveById(id).subscribe(
      (res: User)=>{
        this.user = res;
      }
    );
  }

  onSubmit(){
    this.userService.update(this.user).subscribe(
      (res: User)=>{
        console.log(`User id ${res.id} updated!`);
        this.router.navigate(["list/user"]);
      },
    );
  }

}

