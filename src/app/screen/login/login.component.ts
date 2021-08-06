import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.buildForm();
  }

  ngOnInit() { }

  private buildForm() {
    this.user = this.fb.group({
      email: [null, [Validators.email]],
      password: ['', [Validators.required]]
    })
  }
  login(event: Event) {
    event.preventDefault();
    if (this.user.valid) {
      const value = this.user.value;
      this.authService.login(value.email, value.password)
        .then((res) => {
          this.router.navigate(['/lodgings']);
        })
        .catch(() => {
          alert('la contraseña no es correcta o el correo no esta registrado');
        })
    }
  }
}
