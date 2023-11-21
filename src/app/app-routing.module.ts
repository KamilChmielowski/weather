import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './components/routing/cities/cities.component';
import { MapComponent } from './components/routing/map/map.component';
import { SettingsComponent } from './components/routing/settings/settings.component';
import { WeatherComponent } from './components/routing/weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'map', component: MapComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
