import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { logging } from 'protractor';
@Component({
  selector: 'app-lodgings',
  templateUrl: './lodgings.component.html',
  styleUrls: ['./lodgings.component.css']
})
export class LodgingsComponent implements OnInit {
  lodgings;
  dato = this.form.group({
    search: ""
  });
  query=[];
  constructor(private auth: AuthService, private form: FormBuilder, private router: Router) {
    this.auth.allLodgings().subscribe((res) => {
      this.lodgings = res; 
      console.log(this.lodgings);
    })
  }

  ngOnInit(): void {
 
  }
  search(event: Event) {
    event.preventDefault();
    this.query=[];
    if (this.dato.value.search != "") {
      this.lodgings.forEach(element => {
        if (element.name === this.dato.value.search) {
              this.query.push(element);
            }
            else if (element.location.city === this.dato.value.search) {
              this.query.push(element);
            } 
            else if (element.location.state === this.dato.value.search) {
              this.query.push(element);
            }
      });
    } else if (this.dato.value.search === "") {
      this.query=[];
    }

  }
  prueba(){
    this.lodgings.forEach(element => {
      console.log(element.photos);
    });
  }
  lodgingDetail(uid) {
    this.router.navigate(['/lodgingDetail/' + uid]);
  }
}
