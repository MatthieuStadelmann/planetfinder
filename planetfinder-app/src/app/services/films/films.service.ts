import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {ApiService} from '../api.service';
import {Film} from '../../models/film';


@Injectable({
  providedIn: 'root'
})
export class FilmsService extends ApiService {
  getFilmsBsyUrls(filmUrls: string[]): Observable<Film> {
    return from(filmUrls).pipe(
      mergeMap(url => <Observable<Film>> this.http.get(url))
    );
  }

}
