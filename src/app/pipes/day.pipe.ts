import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day',
  standalone: true,
})
export class DayPipe implements PipeTransform {
  transform(date: Date | undefined, shiftDay = 0): string {
    if (!date) {
      return '';
    }
    date = new Date(date);
    date.setDate(date.getDate() + shiftDay);
    return date ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()] : '';
  }
}
