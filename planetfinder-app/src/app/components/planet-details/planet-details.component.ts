import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlanetsService } from '../../services/planets/planets.service';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Planet } from '../../models/planet';
import { Film } from '../../models/film';
import {People} from '../../models/people';
import {FilmsService} from '../../services/films/films.service';
import {PeopleService} from '../../services/people/people.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit, OnDestroy {
  public generalInformationHeaders: object[] = [
    {name: 'Name'},
    {population: 'Population'},
    {gravity: 'Gravity'},
    {orbital_period: 'Orbital Period'},
    {climate: 'Climate'},
    {diameter: 'Diameter'},
    {rotation_period: 'Rotation Period'},
    {surface_water: 'Surface Water'},
    {terrain: 'Terrain'}];
  public displayedColumnsFilmsTable: string[] = ['Title', 'Release Date'];
  displayedColumnsResidentsTable: string[] = ['Name', 'Gender', 'Birth Year', 'Hair Color', 'Height'];
  private planet: Planet;
  private films: Film[] = [];
  private residents: People[] = [];
  private locationId: string = this.route.snapshot.paramMap.get('id');
  private planetSubscription: Subscription;
  private filmsSubscription: Subscription;
  private residentsSubscription: Subscription;

  constructor(
    private planetsService: PlanetsService,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
      }
      if (event instanceof NavigationEnd) {
        if (this.route.snapshot.paramMap.get('id') !== this.locationId) {
          this.getPlanet();
        }
      }
    });
  }

  ngOnInit() {
    // TODO: START Loader
    this.getPlanet();
  }

  ngOnDestroy(): void {
    this.planetSubscription.unsubscribe();
    this.filmsSubscription.unsubscribe();
    this.residentsSubscription.unsubscribe();
  }

  getPlanet(): void {
    this.locationId = this.route.snapshot.paramMap.get('id');
    this.films.length = 0;
    this.planetSubscription = this.planetsService.getPlanetById(this.locationId)
      .subscribe(
        planet => this.planet = planet,
        err => console.error('Observer got an error: ' + err),
        () => {
          this.getFilms(this.planet.films);
          this.getResidents(this.planet.residents);
        }
      )
  }

  getFilms(filmUrls: string[]): void {
    this.filmsSubscription = this.filmsSubscription = this.filmsService.getFilmsBsyUrls(filmUrls)
      .subscribe(film => this.films.push(film))
  }

  getResidents(residentUrls: string[]): void {
    this.residentsSubscription = this.peopleService.getPeopleByUrls(residentUrls)
      .subscribe(resident => this.residents.push(resident))
  }

}
