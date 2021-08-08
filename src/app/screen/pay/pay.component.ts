import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  data;
  formPay;

  constructor(public fb: FormBuilder, private auth: AuthService, private datePipe: DatePipe, private router: Router) {


    {
      this.formPay = this.fb.group({
        numeroTarjeta: ['', Validators.required],
        mes: ['', Validators.required],
        age: ['', Validators.required],
        cvv: ['', Validators.required]
      });
    }


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
      metod: 'visa/mastercad debito-credito'
    }


    // mensaje de pagado
    document.getElementById("message-desing-modal").classList.add('div-new-color');
    document.getElementById("none1").innerText = 'El pago se realizo con exito.';
    setTimeout(() => {
      document.getElementById("message-pay").innerText = 'Redireccionando a historial de pagos en: 3 ';
    },1000)
    setTimeout(() => {
      document.getElementById("message-pay").innerText = 'Redireccionando a historial de pagos en: 2 ';
    },2000)
    setTimeout(() => {
      document.getElementById("message-pay").innerText = 'Redireccionando a historial de pagos en: 1 ';
    },3000)

    setTimeout(() => {
      console.log(d);
      this.auth.payRent(d).then((res) => {
        console.log(res);
        this.router.navigate(["/paymentHistory"])
      })
    }, 5000);

  }
}
