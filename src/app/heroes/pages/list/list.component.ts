import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroResponse } from '../interfaces/heroResponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  heroes: HeroResponse[] = [];

  constructor(private __hero: HeroesService) {}

  ngOnInit(): void {
    this.__hero.getHeroes().subscribe((resp) => (this.heroes = resp));
  }
}
