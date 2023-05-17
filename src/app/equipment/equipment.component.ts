import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

<<<<<<< HEAD
  equipment: string[] = ["Habitat Dome", "Drones", "Food Containers", "Oxygen Tanks"]
  equiptmentBeingEdited: string = "";

  constructor() { }
=======
   constructor() { }
>>>>>>> df088481627ca8d82d5d5e6537a62e28242f4ab9

   ngOnInit() { }

<<<<<<< HEAD
  add(item:string){
    this.equipment.push(item)
  }

  remove(item:string){
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item:string){
    this.equiptmentBeingEdited = item;
  }

  save(updatedItem:string, item:string){
    let index = this.equipment.indexOf(item);
    this.equipment[index] = updatedItem
    this.equiptmentBeingEdited = ""
  }

=======
   // Code your addItem function here:
   
>>>>>>> df088481627ca8d82d5d5e6537a62e28242f4ab9
}
