import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../service/planets/planets.service';
import { Planet } from '../models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.getPlanets();
  }
  getPlanets(): void {
    this.planetsService.getPlanets().subscribe(planets => this.planets = planets);
  }

}
