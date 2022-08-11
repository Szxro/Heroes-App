import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router, private _service: AuthService) {}

  ngOnInit(): void {}

  logIn() {
    this._service.login().subscribe((resp) => {
      if (resp.id) {
        this._router.navigate(['./heroes/list']);
      }
    });
  }
}
