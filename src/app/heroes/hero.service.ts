import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as allHeroes from 'src/assets/data/data.json';
import { IHero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(params): Observable<IHero[]> {

    let data: IHero[] = (allHeroes as any).default

    let heroes: IHero[] = [];

    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach(key => {
        if (key) {
          heroes.push(...this.searchInArrayOfObjects(key, params[key], data));
        }
      })
      heroes = heroes.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)
    } else {
      heroes = data;
    }

    return of(heroes);
  }

  searchHeroes(term: string): Observable<IHero[]> {
    return this.http.get<IHero[]>('api/heroes/search/' + term);
  }

  objectToUrlParams(obj: any): string {
    return Object.keys(obj).map(key => {
      return key + '=' + obj[key];
    }).join('&');
  }

  searchInArrayOfObjects(key: string, term: string, array: any[]): any[] {
    return array.filter(item => {
      return item[key].toLowerCase().includes(term.toLowerCase());
    });
  }

  getAllCountries() {
    return this.http.get<any>('https://countryapi.gear.host/v1/Country/getCountries');
  }

}
