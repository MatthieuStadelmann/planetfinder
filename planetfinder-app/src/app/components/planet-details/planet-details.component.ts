import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets/planets.service';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Planet } from '../../models/planet';
import { Film } from '../../models/film';
import {People} from '../../models/people';
import {FilmsService} from '../../services/films/films.service';
import {PeopleService} from '../../services/people/people.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  private planet: Planet;
  private films: Film[] = [];
  private residents: People[] = [];

  generalInformationHeaders: object[] = [
    {name: 'Name'},
    {population: 'Population'},
    {gravity: 'Gravity'},
    {orbital_period: 'Orbital Period'},
    {climate: 'Climate'},
    {diameter: 'Diameter'},
    {rotation_period: 'Rotation Period'},
    {surface_water: 'Surface Water'},
    {terrain: 'Terrain'}];
  displayedColumnsFilmsTable: string[] = ['Title', 'Release Date'];
  displayedColumnsResidentsTable: string[] = ['Name', 'Gender', 'Birth Year', 'Hair Color', 'Height'];
  constructor(
    private planetsService: PlanetsService,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
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
    this.planetsService.getPlanetByIdWithDetails(id)
      .subscribe(planet => {
        this.planet = planet;
        this.getFilms(this.planet.films);
        this.getResidents(this.planet.residents);
      });
  }

  getFilms(filmUrls: string[]): void {
    this.filmsService.getFilmsBsyUrls(filmUrls)
      .subscribe(film => this.films.push(film))
  }

  getResidents(residentUrls: string[]): void {
    console.log('test_01');
    this.peopleService.getPeopleByUrls(residentUrls)
      .subscribe(resident => this.residents.push(resident))
  }

}
