import { Component } from '@angular/core';

export interface Location {
  name: string;
  latitude: number;
  longitude: number;
  visited: string;
}

const LOCATION_DATA: Location[] = [
  { name: 'Google HQ', latitude: 21.0079, longitude: 25.01, visited: 'Nov 10, 2021'},
  { name: 'Yeti HQ', latitude: 14.0026, longitude: 120.201, visited: 'Nov 9, 2021'},
  { name: 'Grub & Hub', latitude: 62.941, longitude: 45.62, visited: 'Nov 8, 2021'},
  { name: 'Acme Feed & Seed', latitude: 95.0122, longitude: 81.444, visited: 'Oct 20, 2021'},
  { name: 'Outback Steakhouse', latitude: 10.811, longitude: 101.201, visited: 'Oct 11, 2021'},
  { name: 'LIV Night Club', latitude: 12.0107, longitude: 66.77, visited: 'Jul 9, 2021'},
];

@Component({
  selector: 'tabs-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  displayedColumns: string[] = ['name', 'latitude', 'longitude', 'visited'];
  dataSource = LOCATION_DATA;
}