import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component';

const routes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'planet/:id', component: PlanetInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
