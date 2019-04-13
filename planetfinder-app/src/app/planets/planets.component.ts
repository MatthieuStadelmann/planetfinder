import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../service/planets/planets.service';
import { Planet } from '../models/planet';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  displayedColumns: string[] = ['index', 'name', 'population', 'climate'];
  dataSource = new MatTableDataSource<Planet>();
  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.getAllPlanets();
  }
  getAllPlanets(): void {
    this.planetsService.allPlanets().subscribe(planets => this.dataSource.data = planets);
  }

}
