import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    NavComponent,
    PlanetInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
