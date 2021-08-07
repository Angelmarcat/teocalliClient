import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  data;
  constructor(private auth: AuthService, private datePipe: DatePipe, private router:Router) {
    this.data = JSON.parse(localStorage.getItem("userData"))
    console.log(this.data);
  }

  ngOnInit(): void {
  }

  payRent() {
    let date = new Date();
    const d = {
      date: this.datePipe.transform(date, "yyyy-MM-dd"),
      id: date.getTime(),
      username: this.data.username,
      price: this.data.accommodation.price,
      accommodation: this.data.accommodation.name,
      metod:'visa/mastercad debito-credito'
    }
    console.log(d);
    this.auth.payRent(d).then((res) => {
      console.log(res);
      this.router.navigate(["/paymentHistory"])
    })
  }
}
