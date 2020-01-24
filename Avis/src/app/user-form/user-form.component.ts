import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service'
import { User } from '../user';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;
  showMsg: boolean = false;
  userExist: boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticate: AuthenticationService,
    private userService: UserService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(data =>{this.showMsg= true;
    })
  }

  mettiRuolo(){
    this.authenticate.getRole().authority=='ROLE_UTENTE'
  }





  existUser(){
    if(this.user.username!=''){
      this.userService.existUser(this.user.username).subscribe(res=>{
        if(res){
          this.userExist=true;
        }else{
          this.userExist=false;
        }
      })
    }
  }

  /*gotoUserList() {
    this.router.navigate(['/users']);
  }*/
}
