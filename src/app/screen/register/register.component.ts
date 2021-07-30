import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = this.formBuilder.group({
    username: ['', [Validators.required]],
    name: ['', [Validators.required]],
    father_surname: ['', [Validators.required]],
    mother_surname: ['', [Validators.required]],
    photo: [''],
    email: ['', [Validators.email]],
    password: ['', [Validators.required]],
  });
  image$: any;
  image;
  file;
  dir;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  async registrar(event: Event) {
    event.preventDefault();
    const fileRef = this.storage.ref("photoProfile/" + this.dir);
    const task = this.storage.upload("photoProfile/" + this.dir, this.file);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image = fileRef.getDownloadURL();
          this.image.subscribe(url => {
            console.log(this.user.value);
            this.user.value.photo = url;
            console.log(this.user.value);
            this.auth.createUser(this.user.value);
          });
        })
      ).subscribe();

    console.log(this.user.value);
  }

  uploadFile(event) {
    // const file = event.target.files[0];
    // const dir = "profilePhoto";
    // const fileRef = this.storage.ref(dir);
    // const task = this.storage.upload(dir, file);

    // task.snapshotChanges()
    //   .pipe(
    //     finalize(() => {
    //       this.image$ = fileRef.getDownloadURL();
    //     })
    //   )
    //   .subscribe();

    // console.log(event);
    // console.log(this.dir);

    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.image$ = event.target.result;
    }
    this.file = event.target.files[0];
    this.dir = "profilePhoto" + Date.now();


    // const fileRef= this.storage.ref(dir);
    // const task = this.storage.upload(dir,file);


  }
  File(event) {
    const file = event.target.files[0];
    const name = 'image.png';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url) =>
            console.log(url)
          )
        })
      )
      .subscribe();
  }


}
