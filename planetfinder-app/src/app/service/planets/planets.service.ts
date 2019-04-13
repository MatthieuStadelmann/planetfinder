import { Injectable } from '@angular/core';
import { Planet } from '../../models/planet';
import { MOCK_PLANETS } from '../../mock/mock-planets';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor() { }
  getPlanets(): Observable<Planet[]> {
    return of(MOCK_PLANETS);
  }
}
