import { Component, Input } from '@angular/core';
import { Location } from 'src/app/models/locations.model';

@Component({
  selector: 'tabs-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class TabsLocationsComponent {
  @Input() locations: Location[] | null = [];
  displayedColumns: string[] = ['name', 'latitude', 'longitude', 'visited'];
}