import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PlanetsService } from '../service/planets/planets.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {Planet} from '../models/planet';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  planets$: Observable<Planet[]>;
  private searchTerms = new Subject<string>();

  constructor(private planetsService: PlanetsService) { }
  ngOnInit() {
    this.planets$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.planetsService.searchPlanetByName(term)),
    );

  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
