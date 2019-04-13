import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../service/planets/planets.service';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Planet } from '../models/planet';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.css']
})
export class PlanetInfoComponent implements OnInit {
  private planet: Planet;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // TODO: START Loader
      }
      if (event instanceof NavigationEnd) {
        this.getPlanet();
        // TODO: HIDE Loader
      }
    });
  }

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.planetsService.getPlanetById(id)
      .subscribe(planet => this.planet = planet);
  }
}
