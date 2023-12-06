import { Pipe, PipeTransform } from '@angular/core';

import { SettingsService } from '../services/settings/settings.service';
import { Temperature } from '../services/settings/settings.model';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TempPipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(tempC: number | undefined, tempF: number | undefined): string {
    if (tempC === undefined || tempC === null) {
      return '';
    }
    return this.settingsService.settings.temperature === Temperature.celsius
      ? tempC + ' °C' : tempF + ' °F' || '';
  }
}
