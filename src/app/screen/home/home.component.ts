import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
uid;
  constructor(private as: AuthService) { 
    // this.uid = JSON.parse(localStorage.getItem("user")).uid;
    // this.as.getUserCurrent(this.uid).subscribe((res)=>{
    //   console.log(res);
    //   localStorage.setItem('user',JSON.stringify(res));
    // })
  }

  ngOnInit(): void {
  }

  

}
