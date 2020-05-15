import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";
import { UserI } from "../../shared/models/user.interface";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private authSvc: AuthService, private route:Router) {}

  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  ngOnInit() {
    // probando el login con firebase
    // const user: UserI = {
    //   email: "miomio@ne.com",
    //   password: "12345678",
    // };
    // this.authSvc.loginByEmail(user);
  }

  onLogin(form: UserI) {
    // console.log('Form',form);
    this.authSvc
      .loginByEmail(form)
      .then((res) => {
        console.log("Successfully", res);
        this.route.navigate(['/'])
      })
      .catch((err) => console.log("Error", err));
  }
}
