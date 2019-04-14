import { Injectable } from '@angular/core';
import { Planet } from '../../models/planet';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiUrl = 'https://swapi.co/api/planets';

  constructor(private http: HttpClient) { }
  allPlanets(): Observable<Planet[]> {
    return this.http.get<any>(this.apiUrl)
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

    return this.http.get<any>(`${this.apiUrl}/?search=${term}`).pipe(
      map(res => res.results),
      tap(_ => console.log(`found planet matching "${term}"`)),
      catchError(this.handleError<Planet[]>('searchPlanetByName', []))
    );
  }
  getPlanetById(id: string): Observable<Planet> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(_ => console.log(`fetched planet id=${id}`)),
      catchError(this.handleError<Planet[]>('getPlanetById', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
