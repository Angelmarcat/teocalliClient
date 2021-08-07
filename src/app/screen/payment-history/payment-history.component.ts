import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  payments;
  pays;
  otro;
  constructor(private auth: AuthService) {
    this.ngOnInit();
    this.payments = JSON.parse(localStorage.getItem("userData"));
    this.pays = Object.values(this.payments.payments);

  }

  async ngOnInit() {
    await this.auth.getUserCurrent().subscribe((res) => {
      if (this.payments !== res) {
        localStorage.setItem("userData", JSON.stringify(res));
      }
    })
  }

}
