import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  recover = this.build.group({
    email: ["",Validators.email]
  });
  constructor(private build: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
  }
  recoverPassword(event: Event) {
    event.preventDefault();
    console.log(this.recover.value.email)
    this.auth.recoverPassword(this.recover.value.email).then((res) => {
      console.log(res);
    })

  }
}
