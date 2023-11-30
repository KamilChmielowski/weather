import { Pipe, PipeTransform } from '@angular/core';

import { Setting } from '../../../../services/settings/settings.model';

@Pipe({
  name: 'settingIndex',
  standalone: true,
})
export class SettingIndexPipe<T> implements PipeTransform {

  transform(array: Setting<T>[], keyCompare: T): number {
    return array.findIndex(({ key, value }) => key === keyCompare );
  }
}
