import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData;
  constructor(
    private af: AngularFireAuth,
    private db: AngularFireDatabase,
    private router :Router
  ) {
   
  }

  createUser(value: any) {
    return this.af.createUserWithEmailAndPassword(value.email, value.password).then((res) => {
      const uid = res.user.uid;
      this.verificar();
      console.log(value);
      this.addUserFirebase(uid, value);
    });
  }

  async login(email: string, password: string) {
    const user  = await this.af.signInWithEmailAndPassword(email, password).then((res)=>{
      console.log(res.user.uid);
      localStorage.setItem("user",JSON.stringify(res.user));
      this.getUserCurrent(res.user.uid).subscribe((res)=>{
        localStorage.setItem("userData",JSON.stringify(res));
      });
    });
    // if(user && user.user.emailVerified){
    //   this.router.navigate(['/home']);
    // }else if(user){
    //   alert("Este correo no ha sido verificado favor de revisar su correo");
    // }
  }
  async verificar(): Promise<void> {
    return (await this.af.currentUser).sendEmailVerification().then((res) => {
      alert("revisa tu correo");
    });
  }
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userData");
    return this.af.signOut();
  }

  hasUser() {
    return this.af.authState;
  }
  getUserCurrent(uid){
    return this.db.object(`/users/${uid}`).valueChanges();
  }
  addUserFirebase(uid: any, value: any) {
    const data = {
      uid: uid,
      username: value.username,
      name: value.name,
      father_surname: value.father_surname,
      mother_surname: value.mother_surname,
      photo: value.photo,
      admin: false
    };
    return this.db.database.ref(`/users/${uid}`).set(data);
  }
}
