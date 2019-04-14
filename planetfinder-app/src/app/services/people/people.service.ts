import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';
import {from, Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {People} from '../../models/people';


@Injectable({
  providedIn: 'root'
})
export class PeopleService extends ApiService {
  getPeopleByUrls(residentUrls: string[]): Observable<People> {
    console.log('test_02');
    return from(residentUrls).pipe(
      mergeMap(url => <Observable<People>> this.http.get(url))
    );
  }
}
