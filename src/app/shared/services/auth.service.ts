import { Injectable } from "@angular/core";
import { UserI } from "../models/user.interface";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { LoginRoutingModule } from "src/app/components/login/login-routing.module";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
  }

  // logeo en firebase con email
  loginByEmail(user: UserI) {
    const { email, password } = user;

    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // metodo de logout
  logout() {
    this.afAuth.auth.signOut();
  }
}
