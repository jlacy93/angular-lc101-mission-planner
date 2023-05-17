import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "LC Angular 3";
  rocketName: string = "ICAN";
  editingRocket: boolean = false;
  editingMission: boolean = false;
  editingRocket: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

<<<<<<< HEAD
  updateRocket(updateName: string) {
    this.rocketName = updateName;
    this.editingRocket = false;
  }

=======
  updateRocket(updatedName: string) {
    this.rocketName = updatedName;
    this.editingRocket = false;
  }
>>>>>>> df088481627ca8d82d5d5e6537a62e28242f4ab9
}
