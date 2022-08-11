import { Component, OnInit } from '@angular/core';
import { HeroResponse } from '../interfaces/heroResponse';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  value: string = '';
  heroes: HeroResponse[] = [];
  heroesValue!: HeroResponse;
  valueError: string = '';

  constructor(private Hero: HeroesService) {}

  ngOnInit(): void {}

  getValue(arg: string) {
    if (!arg.trim()) return;
    this.Hero.getSuggestions(arg.trim()).subscribe(
      (resp) => (this.heroes = resp)
    );
  }

  setValue(value: MatAutocompleteSelectedEvent) {
    if (!value.option.value) return;
    const hero: HeroResponse = value.option.value;
    this.value = hero.superhero;
    this.heroesValue = hero;
  }
}
