import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-my-accommodation',
  templateUrl: './my-accommodation.component.html',
  styleUrls: ['./my-accommodation.component.css']
})
export class MyAccommodationComponent implements OnInit {
acomodation;
reports = this.form.group({
  report:""
});
  constructor(private form: FormBuilder, private route : ActivatedRoute, private auth:AuthService, private router:Router) {
    this.route.snapshot.paramMap.get("id");
    this.acomodation = JSON.parse(localStorage.getItem("userData")).accommodation;
   }

  ngOnInit(): void {
  }
  sendReport(event:Event,id){
    event.preventDefault();
    console.log(this.reports.value.report);
    this.auth.sendRerpot(id,this.reports.value).then((res)=>{
      console.log(res);
    })
  }
}
