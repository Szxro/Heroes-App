import { Component, Input, OnInit } from '@angular/core';
import { HeroResponse } from '../../pages/interfaces/heroResponse';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
    `
      .card--margin {
        margin-top: 1em;
      }
    `,
  ],
})
export class HeroCardComponent implements OnInit {
  @Input() item!: HeroResponse;

  constructor() {}

  ngOnInit(): void {}
}
