import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationRequiredGuardService } from './services/guard/location-required-guard.service';
import { WelcomeComponent } from './components/routing/welcome/welcome.component';
import { WelcomeRedirectGuardService } from './services/guard/welcome-redirect-guard.service';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: '',
    children: [
      { path: 'weather', loadComponent: () => import('./components/routing/weather/weather.component').then(mod => mod.WeatherComponent) },
      { path: 'cities', loadComponent: () => import('./components/routing/cities/cities.component').then(mod => mod.CitiesComponent) },
      {
        path: 'map',
        loadComponent: () => import('./components/routing/map/map.component').then(mod => mod.MapComponent),
        canActivate: [LocationRequiredGuardService],
      },
      { path: 'astronomy', loadComponent: () => import('./components/routing/astronomy/astronomy.component').then(mod => mod.AstronomyComponent) },
      { path: 'history', loadComponent: () => import('./components/routing/history/history.component').then(mod => mod.HistoryComponent) },
      { path: 'settings', loadComponent: () => import('./components/routing/settings/settings.component').then(mod => mod.SettingsComponent) },
      { path: '**', redirectTo: 'weather' },
    ],
    canActivate: [WelcomeRedirectGuardService]
  },
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
