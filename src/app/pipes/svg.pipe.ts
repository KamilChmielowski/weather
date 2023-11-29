import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'svg',
  standalone: true,
})
export class SvgPipe implements PipeTransform {
  transform(name: string): string {
    return `assets/svg/${name}.svg`
  }
}
