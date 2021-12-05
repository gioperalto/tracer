import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tabs-exposures',
  templateUrl: './exposures.component.html',
  styleUrls: ['./exposures.component.css']
})
export class TabsExposuresComponent {
  constructor(private router: Router) {}
}