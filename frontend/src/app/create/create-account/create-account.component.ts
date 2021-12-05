import { Component } from '@angular/core';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  hidePassword = true;
  hideConfirm = true;

  toggleHidePassword(event: any): void {
    this.hidePassword = !this.hidePassword;
    event.preventDefault();
  }

  toggleHideConfirm(event: any): void {
    this.hideConfirm = !this.hideConfirm;
    event.preventDefault();
  }
}