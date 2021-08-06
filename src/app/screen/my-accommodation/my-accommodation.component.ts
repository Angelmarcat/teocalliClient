import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-my-accommodation',
  templateUrl: './my-accommodation.component.html',
  styleUrls: ['./my-accommodation.component.css']
})
export class MyAccommodationComponent implements OnInit {
acomodation;
  constructor(private route : ActivatedRoute, private auth:AuthService) {
    this.route.snapshot.paramMap.get("id");
    this.acomodation = JSON.parse(localStorage.getItem("userData")).acommodation;
    console.log(this.acomodation)
   }

  ngOnInit(): void {
  }

}
