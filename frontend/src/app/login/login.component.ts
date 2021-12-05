import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {
  }

  toggleHide(event: any): void {
    this.hide = !this.hide;
    event.preventDefault();
  }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe({
        error: (e) => console.log('Could not authenticate'),
        complete: () => this.router.navigate(['']),
      });
  }
}