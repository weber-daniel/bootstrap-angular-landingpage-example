import { Injectable } from '@angular/core';
import {Language} from '../models/language';
import {HttpClient} from '@angular/common/http';
import {DataStore} from '../store/data-store';
import {Observable} from 'rxjs';
import {filter, find, first, flatMap, map, mergeMap, single, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private _http: HttpClient, private dataStore: DataStore) { }

  // Change later to backend call from environment URL
  getProgrammingLanguageList(): Observable<Language[]> {
    return this.dataStore.returnDataStore();
  }

  getProgrammingLanguageById(langID: number): Observable<Language> {
    return this.dataStore.returnDataStore()
      .pipe(
        mergeMap(lang => lang),
        find(val => {
          langID = Number(langID);
          return langID === val.id ;
        })
      );
  }


}
