import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeroesService } from '../../services/heroes.service';
import { HeroResponse } from '../interfaces/heroResponse';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  hero!: HeroResponse;

  constructor(
    private __route: ActivatedRoute,
    private __hero: HeroesService,
    private __router: Router
  ) {}

  ngOnInit(): void {
    this.__route.params.subscribe(({ id }) => {
      this.__hero.getHeroesByName(id).subscribe((resp) => (this.hero = resp));
    });
  }
  goBack() {
    this.__router.navigate(['/heroes/list']);
  }
}
