import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets/planets.service';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  constructor(private planetsService: PlanetsService) { }
  planets: Planet[];
  displayedColumns: string[] = ['Name', 'Population', 'Film Appearances', 'Last Edited', 'Created'];

  ngOnInit() {
    this.getAllPlanets();
  }
  getAllPlanets(): void {
    this.planetsService.allPlanets().subscribe(planets => this.planets = planets);
  }
}
