import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-view-payments',
  templateUrl: './view-payments.component.html',
  styleUrls: ['./view-payments.component.css']
})
export class ViewPaymentsComponent implements OnInit {
  payments;
  pays;
  constructor(private auth: AuthService, private route: ActivatedRoute) {
    this.ngOnInit();
    const id = this.route.snapshot.paramMap.get("id");
    this.payments = JSON.parse(localStorage.getItem("userData"));
    this.pays = Object.values(this.payments.payments);
    this.pays.find((element) => {
      if (element.id == id) {
        this.pays = element;
      }
    })
  }

  async ngOnInit() {
    await this.auth.getUserCurrent().subscribe((res) => {
      if (this.payments !== res) {
        localStorage.setItem("userData", JSON.stringify(res));
      }
    })
  }

}
