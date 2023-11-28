import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'settingIndex',
  standalone: true,
})
export class SettingIndexPipe<T> implements PipeTransform {

  transform(map: Map<T, string>, value: T): number {
    return Array.from(map.keys()).indexOf(value);
  }
}
