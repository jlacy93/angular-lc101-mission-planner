import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   constructor() { }

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
