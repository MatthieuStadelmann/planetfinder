import { Injectable } from '@angular/core';
import { Planet } from '../../models/planet';
import {Observable, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import {HttpClient} from '@angular/common/http';

const PLANETS_URL = 'planets';

@Injectable({
  providedIn: 'root'
})

export class PlanetsService extends ApiService {
  private planetsUrl = this.baseUrl + PLANETS_URL;
  constructor(http: HttpClient) {
    super(http);
  }

   allPlanets(): Observable<Planet[]> {
    return this.http.get<any>(this.planetsUrl)
      .pipe(
        map(res => {
          return res.results.sort((a, b) => a.name < b.name ? -1 : 1);
        }),
        catchError(this.handleError<Planet[]>('allPlanets', []))
      );
  }
  searchPlanetByName(term: string): Observable<Planet[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<any>(`${this.planetsUrl}/?search=${term}`).pipe(
      map(res => res.results),
      catchError(this.handleError<Planet[]>('searchPlanetByName', []))
    );
  }
  getPlanetById(id: string): Observable<Planet> {
    return this.http.get<any>(`${this.planetsUrl}/${id}`).pipe(
      map(res => res ),
      catchError(this.handleError<Planet[]>('getPlanetById', []))
    );
  }}

