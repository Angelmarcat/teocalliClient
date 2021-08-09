import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { report } from 'process';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-my-accommodation',
  templateUrl: './my-accommodation.component.html',
  styleUrls: ['./my-accommodation.component.css']
})
export class MyAccommodationComponent implements OnInit {
  acomodation;
  reports = this.form.group({
    report: "",
    username: "",
    date:"",
  });
  data;
  modal : NgbModalRef;
  constructor(private form: FormBuilder, private route: ActivatedRoute, private auth: AuthService, private router: Router,private modalService: NgbModal, private datePipe:DatePipe) {
    this.route.snapshot.paramMap.get("id");
    this.data = JSON.parse(localStorage.getItem("userData"));
    this.acomodation = JSON.parse(localStorage.getItem("userData")).accommodation;
  }

  ngOnInit(): void {
  }
  sendReport(event: Event, id) {
    event.preventDefault();
    const date = new Date();
    this.reports.value.username = this.data.username;
    this.reports.value.date = this.datePipe.transform(date, "yyyy-MM-dd"),
    console.log(this.reports.value);
    this.auth.sendRerpot(id, this.reports.value).then((res) => {
      console.log(res);
      setTimeout(()=>{
        location.reload();
      },2000)
      
    })
  }
}
