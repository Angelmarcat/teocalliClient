import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-lodging-detail',
  templateUrl: './lodging-detail.component.html',
  styleUrls: ['./lodging-detail.component.css']
})
export class LodgingDetailComponent implements OnInit {
lodging:any;
data;
  constructor(private route:ActivatedRoute, private auth:AuthService,private datePipe:DatePipe) {
    this.data = JSON.parse(localStorage.getItem("userData")); 
    const id = this.route.snapshot.paramMap.get("id");
    this.auth.lodging(id).subscribe((res)=>{
      this.lodging = res;
    });
   }

  ngOnInit(){
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

}
