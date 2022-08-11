import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/auth.interface';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  private _urlApi: string = environment.urlApi;
  private _authData!: AuthResponse;

  login(): Observable<AuthResponse> {
    return this._http.get<AuthResponse>(`${this._urlApi}/usuarios/1`).pipe(
      tap((auth) => (this._authData = auth)),
      tap((auth) => localStorage.setItem('token', auth.id))
    );
  }

  authState(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this._http.get<AuthResponse>(`${this._urlApi}/usuarios/1`).pipe(
      map((auth) => {
        this._authData = auth;
        return true;
      })
    );
  }

  get authData(): AuthResponse {
    return { ...this._authData };
  }
}
