import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-lodging-detail',
  templateUrl: './lodging-detail.component.html',
  styleUrls: ['./lodging-detail.component.css']
})
export class LodgingDetailComponent implements OnInit {
lodging:any;
data;
id;
accommodationSubscription: Subscription;
accommodation;
  constructor(private route:ActivatedRoute, private auth:AuthService,private datePipe:DatePipe) {
    this.data = JSON.parse(localStorage.getItem("userData")); 
    this.id =  this.route.snapshot.paramMap.get("id");
    console.log(this.id)
   }

  ngOnInit(){
    this.fetchAccommodation();
  }
  sendRequest(id){
    let date = new Date();
    const request={
      username:this.data.username,
      date:this.datePipe.transform(date, "yyyy-MM-dd"),
      status:false,
      name:this.data.firstName,
      fatherSurname:this.data.fatherSurname
    };
    console.log(this.data)
    this.auth.request(id,request).then((res)=>{
      console.log(res);
    })
  }
  fetchAccommodation() {
    console.log(this.id)
    this.accommodationSubscription = this.auth
      .getAccommodationById(this.id)
      .subscribe(
        (data:any) => {
          this.lodging = data;
          console.log(this.lodging);
        },
        console.error
      );
  }
  fetch() {
    this.accommodationSubscription = this.auth
      .getUserById()
      .subscribe(
        (data:any) => {
          console.log(data);
        },
        console.error
      );
  }

}
