import { Pipe, PipeTransform } from '@angular/core';
import { HeroResponse } from '../pages/interfaces/heroResponse';

@Pipe({
  name: 'pipeImage',
})
export class PipeImage implements PipeTransform {
  transform(value: HeroResponse): string {
    if (value.alt_img) {
      return `${value.alt_img}`;
    } else if (!value.id && !value.alt_img) {
      return `../../../../assets/heroes/no-image.png`;
    } else {
      return `../../../../assets/heroes/${value.id}.jpg`;
    }
  }
}
