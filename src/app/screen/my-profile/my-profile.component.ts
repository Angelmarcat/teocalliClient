import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userData;
  constructor(private auth: AuthService) {
    this.userData = JSON.parse(localStorage.getItem("userData"));
    console.log(this.userData);
  }

  ngOnInit(): void {
    this.auth.getUserCurrent(this.userData.uid).subscribe((res) => {
      console.log(res);
      localStorage.setItem("userData", JSON.stringify(res));
    })
  }

}
