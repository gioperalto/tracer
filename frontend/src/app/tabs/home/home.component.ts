import { Component, Input } from '@angular/core';
import { Exposure } from 'src/app/models/exposures.model';
import { Patient } from 'src/app/models/patients.model';

@Component({
  selector: 'tabs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class TabsHomeComponent {
  @Input() patient: Patient | null = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    created: new Date()
  };
  @Input() incidents: Exposure[] | null = [];
}