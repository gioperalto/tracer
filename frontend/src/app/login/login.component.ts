import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  toggleHide(event: any): void {
    this.hide = !this.hide;
    event.preventDefault();
  }
}