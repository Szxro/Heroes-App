import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroResponse } from '../pages/interfaces/heroResponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private _http: HttpClient) {}
  urlApi: string = environment.urlApi;

  getHeroes(): Observable<HeroResponse[]> {
    return this._http.get<HeroResponse[]>(`${this.urlApi}/heroes`);
  }

  getHeroesByName(arg: string): Observable<HeroResponse> {
    return this._http.get<HeroResponse>(`${this.urlApi}/heroes/${arg}`);
  }

  getSuggestions(value: string): Observable<HeroResponse[]> {
    return this._http.get<HeroResponse[]>(
      `${this.urlApi}/heroes?q=${value}&_limit=6`
    );
  }

  postHeroe(heroe: HeroResponse): Observable<HeroResponse> {
    return this._http.post<HeroResponse>(`${this.urlApi}/heroes`, heroe);
  }

  updateHero(heroe: HeroResponse): Observable<HeroResponse> {
    return this._http.put<HeroResponse>(
      `${this.urlApi}/heroes/${heroe.id}`,
      heroe
    );
  }

  deleteHero(id: string): Observable<any> {
    return this._http.delete<any>(`${this.urlApi}/heroes/${id}`);
  }
}
