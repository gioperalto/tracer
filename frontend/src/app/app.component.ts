import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tracer';
  
  constructor(
    public auth: AuthService, 
    private router: Router
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}