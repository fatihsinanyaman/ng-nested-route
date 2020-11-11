import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCardComponent } from './pages/employee-card/employee-card.component';
import { PropertyDeclarationsComponent } from './pages/employee-card/pages/property-declarations/property-declarations.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employee',
    component: EmployeeCardComponent,
    children: [
      {
        path: 'property-declarations',
        component: PropertyDeclarationsComponent,
        outlet: 'employee',
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
