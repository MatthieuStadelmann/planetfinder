import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {Planet} from '../../models/planet';
import {PlanetsService} from '../../services/planets/planets.service';
import {getPlanetId} from '../../utils/utils';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private planets$: Observable<Planet[]>;
  private searchTerms = new Subject<string>();
  public getPlanetId = getPlanetId;

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
