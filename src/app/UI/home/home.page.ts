import {Component} from '@angular/core';
import {AuthService} from '../../Service/authService/auth.service';
import {LoginVMReq} from '../../request/loginVMReq';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name = "admin";
  pass ="admin";
  constructor(private auth: AuthService,private router: Router) {
  }

  login(form) {
    form.value.rememberMe = true;
    this.auth.authentication(form.value).subscribe(data =>{
      // eslint-disable-next-line eqeqeq

      console.log(data);
      if(data.id_token != null){
        sessionStorage.setItem('token',"Bearer "+data.id_token)
        this.router.navigateByUrl('/main');
      }
    });
  }

}
