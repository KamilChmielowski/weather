import { BreakpointObserver } from '@angular/cdk/layout';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  constructor(private breakpointObserver: BreakpointObserver) {}

  transform(value: string, valuePortrait: string): string {
    return !this.breakpointObserver.isMatched([`(max-width: 767px)`])
      ? value : valuePortrait;
  }
}
