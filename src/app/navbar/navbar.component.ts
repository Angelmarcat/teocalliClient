import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class navbarrComponent implements OnInit {
  user = false;
  constructor(private auth: AuthService, private router: Router) {
    
  }
  ngDoCheck(){
    const log = localStorage.getItem("user");
    if(log){
      this.user=true;
    }else{
      this.user=false;
    }
  }
  ngOnInit() {
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(["/login"]);
    })
  }


}
