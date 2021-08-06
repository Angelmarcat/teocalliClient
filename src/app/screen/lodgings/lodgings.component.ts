import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lodgings',
  templateUrl: './lodgings.component.html',
  styleUrls: ['./lodgings.component.css']
})
export class LodgingsComponent implements OnInit {
  lodgings = [];
  fotos = [];
  dato = this.form.group({
    search: ""
  });
  query;
  constructor(private auth: AuthService, private form: FormBuilder, private router: Router) {
    this.auth.allLodgings().subscribe((res) => {
      this.lodgings = res;  
      console.log(res);
    })
  }

  ngOnInit(): void {

  }
  search(event: Event) {
    event.preventDefault();
    if (this.dato.value.search != "") {
      this.lodgings.find((element) => {
        if (element.name === this.dato.value.search) {
          this.query = element;
        }
        else if (element.location.city === this.dato.value.search) {
          this.query = element;
        } else if (element.location.state === this.dato.value.search) {
          this.query = element;
        }
      })
    } else if (this.dato.value.search === "") {
      this.query = "";
    }
    console.log(this.query)

  }
  lodgingDetail(uid) {
    this.router.navigate(['/lodgingDetail/' + uid]);
  }
}
