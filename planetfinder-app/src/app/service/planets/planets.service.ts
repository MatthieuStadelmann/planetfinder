import { Injectable } from '@angular/core';
import { Planet } from '../../models/planet';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiUrl = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }
  allPlanets(): Observable<Planet[]> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => res.results)
      );
  }
}
