import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlanetsService } from '../../services/planets/planets.service';
import { Planet } from '../../models/planet';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit, OnDestroy {
  constructor(private planetsService: PlanetsService) { }
  public displayedColumns: string[] = ['Name', 'Population', 'Film Appearances', 'Last Edited', 'Created'];
  private planets: Planet[];
  private planetsSubscription: Subscription;

  ngOnInit() {
    this.getAllPlanets();
  }

  ngOnDestroy(): void {
    this.planetsSubscription.unsubscribe()
  }

  getAllPlanets(): void {
    this.planetsSubscription = this.planetsService.allPlanets().subscribe(planets => this.planets = planets);
  }

}
