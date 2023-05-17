import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

<<<<<<< HEAD
  experiments: string[] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"];
  experimentBeingEdited: string = "";

  constructor() { }
=======
   constructor() { }
>>>>>>> df088481627ca8d82d5d5e6537a62e28242f4ab9

   ngOnInit() { }

  add(experiment: string){
    this.experiments.push(experiment)
  }

  remove(experiment: string){
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1)
  }
  
  edit(experiment:string){
    this.experimentBeingEdited = experiment;
  }

  save(updatedExperiment:string, experiment:string){
    let index = this.experiments.indexOf(experiment);
    this.experiments[index] = updatedExperiment;
    this.experimentBeingEdited = "";
  }
}
