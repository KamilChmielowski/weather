import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './components/routing/cities/cities.component';
import { LocationRequiredGuardService } from './services/guard/location-required-guard.service';
import { MapComponent } from './components/routing/map/map.component';
import { SettingsComponent } from './components/routing/settings/settings.component';
import { WeatherComponent } from './components/routing/weather/weather.component';
import { WelcomeComponent } from './components/routing/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: '',
    children: [
      { path: 'weather', component: WeatherComponent },
      { path: 'cities', component: CitiesComponent },
      { path: 'map', component: MapComponent },
      { path: 'settings', component: SettingsComponent },
    ],
    canActivate: [LocationRequiredGuardService]
  },
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
