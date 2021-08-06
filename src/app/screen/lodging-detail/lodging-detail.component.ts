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
  constructor(private route:ActivatedRoute, private auth:AuthService) {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.auth.lodging(id).subscribe((res)=>{
      this.lodging = res;
      console.log(this.lodging.name);
    });
   }

  ngOnInit(){
  }
  sendRequest(){
    
  }

}
