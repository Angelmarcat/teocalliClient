import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData;
  constructor(
    private af: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  }

  createUser(value: any) {
    return this.af.createUserWithEmailAndPassword(value.email, value.password).then((res) => {
      const uid = res.user.uid;
      this.verificar();
      this.addUserFirebase(uid, value);
    });
  }

  async login(email: string, password: string) {
    const user = await this.af.signInWithEmailAndPassword(email, password).then((res) => {
      if (res.user.emailVerified) {
        localStorage.setItem("isUserLoggedIn", 'true');
        console.log(res.user.uid);
        localStorage.setItem("user", JSON.stringify(res.user));
        this.getUser(res.user.uid).subscribe((res) => {
          localStorage.setItem("userData", JSON.stringify(res));
        });
      } else {
        alert("Este correo no ha sido verificado favor de revisar su correo");
      }

    });

  }
  async recoverPassword(email) {
    this.af.sendPasswordResetEmail(email).then((res) => {
      console.log('exitoso');
    }).catch((err) => console.log(err));
  }

  async verificar(): Promise<void> {
    return (await this.af.currentUser).sendEmailVerification().then((res) => {
      alert("revisa tu correo");
    });
  }

  logout() {
    localStorage.clear(); return this.af.signOut();
  }

  hasUser() {
    return this.af.authState;
  }
  getUser(uid) {
    return this.db.object(`/users/${uid}`).valueChanges();
  }
  getUserCurrent() {
    return this.db.object(`/users/${this.userData.uid}`).valueChanges();
  }
  addUserFirebase(uid: any, value: any) {
    const data = {
      uid: uid,
      username: value.email,
      firstName: value.firstName,
      fatherSrname: value.father_surname,
      motherSurname: value.mother_surname,
      photo: value.photo,
      admin: false,
      gender: value.gender,
      birthDate: value.birthday
    };
    return this.db.database.ref(`/users/${uid}`).set(data);
  }

  updateUser(value: any) {
    this.db.database.ref(`/users/${this.userData.uid}`).update(value);
    return this.getUserCurrent();
  }

  uploadFile(doc, value: any) {
    console.log(doc, value);
    this.db.database.ref(`/users/${this.userData.uid}/documents/${doc}`).set(value);
    return this.getUserCurrent();
  }

  uploadProfilePhoto(value) {
    this.db.database.ref(`/users/${this.userData.uid}/photo`).set(value);
    return this.getUserCurrent();
  }
  allLodgings() {
    return this.db.list("/alojamientos").valueChanges();
  }
  lodging(id) {
    return this.db.object(`/alojamientos/${id}`).valueChanges();
  }

  request(id, request,idrequest) {
    return this.db.database.ref(`/alojamientos/${id}/requests/${idrequest}`).set(request);
  }
  payRent(value) {
    return this.db.database.ref(`/users/${this.userData.uid}/payments/${value.id}`).set(value);
  }
  payments() {
    return this.db.object(`/users/${this.userData.uid}/payments`).valueChanges();
  }
  sendRerpot(id, report) {
    return this.db.database.ref(`/alojamientos/${id}/reports`).push(report);
  }
  public getAccommodationById(id): Observable<any> {
    return this.db.list('alojamientos', ref => ref.orderByChild('id').equalTo(id))
      .snapshotChanges().pipe(
        map(
          (data: SnapshotAction<any>[]) => {
            console.log(data[0].payload);
            const accommodation = data[0].payload.val();
            accommodation.key = data[0].key;
            return accommodation;
          }
        ));
  }
  public getUserById(): Observable<any> {
    return this.db.list('users', ref => ref.orderByChild('uid').equalTo('qPzwA7VBZlal0ONT7Mqro4jdeAP2'))
      .snapshotChanges().pipe(
        map(
          (data: SnapshotAction<any>[]) => {
            console.log(data);
            const accommodation = data[0].payload.val();
            accommodation.key = data[0].key;
            return accommodation;
          }
        ));
  }
}
