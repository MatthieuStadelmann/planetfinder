import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Planet} from '../../models/planet';
import {catchError, tap} from 'rxjs/operators';
import {ApiService} from '../api.service';

const FILMS_URL = 'films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends ApiService {
  private apiUrl = this.baseUrl + FILMS_URL;
  getFilmById(id: string): Observable<Planet> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(_ => console.log(`fetched planet id=${id}`)),
      catchError(this.handleError<Planet[]>('getPlanetById', []))
    );
  }

}
