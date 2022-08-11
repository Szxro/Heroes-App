import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroResponse, Publisher } from '../interfaces/heroResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  publisher = [
    {
      id: 'DC Comics',
      desc: Publisher.DCComics,
    },
    {
      id: 'Marvel Comics',
      desc: Publisher.MarvelComics,
    },
  ];

  hero: HeroResponse = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private __http: HeroesService,
    private __routes: ActivatedRoute,
    private __router: Router,
    private __snack: MatSnackBar,
    private __dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.__router.url.includes('edit')) return;
    this.__routes.params.subscribe(({ id }) => {
      this.__http.getHeroesByName(id).subscribe((resp) => (this.hero = resp));
    });
  }

  saveHeroe() {
    if (this.hero.superhero.trim().length === 0) return;

    if (this.hero.id) {
      this.__http
        .updateHero(this.hero)
        .subscribe((resp) => this.showMessage('Update Hero'));
    } else {
      this.__http.postHeroe(this.hero).subscribe((resp) => {
        this.showMessage('Created Hero');
        this.__router.navigate(['/heroes/edit', resp.id]);
      });
    }
  }

  deleteHero() {
    const dialog = this.__dialog.open(DialogComponent, {
      data: this.hero,
    });

    dialog.afterClosed().subscribe((resp) => {
      if (resp) {
        this.__http
          .deleteHero(this.hero.id!)
          .subscribe((resp) => this.__router.navigate(['/heroes/list']));
      }
    });
  }

  showMessage(value: string): void {
    this.__snack.open(value, 'Close', {
      duration: 2500,
    });
  }
}
