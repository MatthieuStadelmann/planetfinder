import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';

const routes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'planet/:id', component: PlanetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
