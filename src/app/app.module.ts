import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeCardComponent } from './pages/employee-card/employee-card.component';
import { PropertyDeclarationsComponent } from './pages/employee-card/pages/property-declarations/property-declarations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeCardComponent,
    PropertyDeclarationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
