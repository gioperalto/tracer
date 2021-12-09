import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Patient } from 'src/app/models/patients.model';
import { addPatient } from 'src/app/state/patients/patients.actions';
import { PatientsService } from 'src/app/state/patients/patients.service';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  hidePassword = true;
  hideConfirm = true;
  firstName = '';
  lastName = '';
  phoneNumber = '';
  email = '';
  password = '';
  created = new Date();

  constructor(
    private router: Router, 
    private store: Store,
    private auth: AuthService,
    private patientsService: PatientsService,
  ) {}

  toggleHidePassword(event: any): void {
    this.hidePassword = !this.hidePassword;
    event.preventDefault();
  }

  toggleHideConfirm(event: any): void {
    this.hideConfirm = !this.hideConfirm;
    event.preventDefault();
  }

  public submit() {
    const pat: Patient = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      password: this.password,
      created: new Date(this.created.toISOString())
    };
    this.patientsService.addPatient(pat)
    .subscribe((patient) => this.store.dispatch(addPatient({ patient })));
    this.auth.login(this.email, this.password)
    .pipe(first())
    .subscribe({ error: (e) => console.log('Could not authenticate') });
    this.router.navigate(['/'])
  }
}