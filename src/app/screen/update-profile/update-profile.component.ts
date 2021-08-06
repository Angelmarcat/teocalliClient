import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user;
  userData;
  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.userData = JSON.parse(localStorage.getItem("userData"));
    this.user = this.formBuilder.group({
      username: [this.userData.username, [Validators.required]],
      name: [this.userData.name, [Validators.required]],
      fatherSurname: [this.userData.fatherSurname, [Validators.required]],
      motherSurname: [this.userData.motherSurname, [Validators.required]],
      birthDate: [this.userData.birthDate, [Validators.required]],
      gender: [this.userData.gender, [Validators.required]]
    });
  }

  ngOnInit() {
    this.auth.getUserCurrent().subscribe((res) => {
      if (this.userData !== res) {
        localStorage.setItem("userData", JSON.stringify(res));
      } else {
        console.log("no hay cambios")
      }
    });
  }

  datos(event: Event) {
    event.preventDefault();
    console.log(this.user.value)
    this.auth.updateUser(this.user.value).subscribe((res) => {
      localStorage.setItem("userData", JSON.stringify(res));
      console.log(res);
      location.reload();
    });
  }

}
