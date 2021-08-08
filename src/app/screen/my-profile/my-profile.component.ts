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
  image$: any;
  image;
  file;
  dir;
  constructor(private auth: AuthService, private storage: AngularFireStorage) {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  }
  async ngOnInit() {
    await this.auth.getUser(this.userData.uid).subscribe((res) => {
      if (this.userData !== res) {
        localStorage.setItem("userData", JSON.stringify(res));
        console.log(res);
      }
    })
  }
  uploadFile(event, doc) {
    event.preventDefault();
    const dir = doc + "/" + doc + Date.now();
    const file = event.target.files[0];
    console.log(dir,file);
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
    const fileRef = this.storage.ref("photoProfile/" + this.dir);
    const task = this.storage.upload("photoProfile/" + this.dir, this.file);

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

  opneFile(event) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.image$ = event.target.result;
    }
    this.file = event.target.files[0];
    this.dir = "profilePhoto" + Date.now();


  }
}
