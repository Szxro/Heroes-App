import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from '../../../auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        margin: 1em;
      }
      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router, private _auth: AuthService) {}

  ngOnInit(): void {}

  get authData(): AuthResponse {
    return this._auth.authData;
  }

  logOut() {
    localStorage.removeItem('token');
    this._router.navigate(['/auth']);
  }
}
