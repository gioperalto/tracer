import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Exposure } from 'src/app/models/exposures.model';

@Component({
  selector: 'tabs-exposures',
  templateUrl: './exposures.component.html',
  styleUrls: ['./exposures.component.css']
})
export class TabsExposuresComponent {
  @Input() exposures: Exposure[] | null = [];
  constructor(private router: Router) {}
}