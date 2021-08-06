import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userData;
  now;
  respuesta = false;
  documents = [
    { icon : "../../../assets/boton-x.svg"},
    { icon : "../../../assets/boton-x.svg"},
    { icon: "../../../assets/boton-x.svg"},
    { icon: "../../../assets/boton-x.svg" },
  ];
  constructor(private auth: AuthService, private storage: AngularFireStorage) {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  }
  async ngOnInit() {
    await this.auth.getUserCurrent().subscribe((res) => {
      if (this.userData !== res) {
        localStorage.setItem("userData", JSON.stringify(res));

      }
    })
  }
  uploadFile(event, doc) {
    event.preventDefault();
    const dir = doc + "/" + doc + Date.now();
    const file = event.target.files[0];
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          const image = fileRef.getDownloadURL();
          image.subscribe(url => {
            this.auth.uploadFile(doc ,url);
            location.reload();
          });
        })
      ).subscribe();
  }
  uploadProfilePhoto(event) {
    event.preventDefault();
    const dir = "/photoProfile/photoProfile" + Date.now();
    const file = event.target.files[0];
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          const image = fileRef.getDownloadURL();
          image.subscribe(url => {
            this.auth.uploadProfilePhoto(url);
            location.reload();
          });
        })
      ).subscribe();
  }
}
