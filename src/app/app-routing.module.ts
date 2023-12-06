import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationRequiredGuardService } from './services/guard/location-required-guard.service';
import { WelcomeComponent } from './components/routing/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: '',
    children: [
      { path: 'weather', loadComponent: () => import('./components/routing/weather/weather.component').then(mod => mod.WeatherComponent) },
      { path: 'cities', loadComponent: () => import('./components/routing/cities/cities.component').then(mod => mod.CitiesComponent) },
      { path: 'map', loadComponent: () => import('./components/routing/map/map.component').then(mod => mod.MapComponent) },
      { path: 'astronomy', loadComponent: () => import('./components/routing/astronomy/astronomy.component').then(mod => mod.AstronomyComponent) },
      { path: 'settings', loadComponent: () => import('./components/routing/settings/settings.component').then(mod => mod.SettingsComponent) },
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
