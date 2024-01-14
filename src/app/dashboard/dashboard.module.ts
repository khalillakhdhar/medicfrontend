import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { MaladiesComponent } from './maladies/maladies.component';
import { RappelsComponent } from './rappels/rappels.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    MedicamentsComponent,
    MaladiesComponent,
    RappelsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
