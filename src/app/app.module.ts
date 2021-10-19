import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header.component';
import { SideNavComponent } from './layouts/side-nav.component';

import { LandingComponent } from './layouts/landing.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { MastersComponent } from './modules/masters/masters.component';
import { AssignRoleComponent } from './modules/assign-role/assign-role.component';
import { AddNewGroupComponent } from './modules/groups/add-new-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,

    LandingComponent,
    OverviewComponent,
    MastersComponent,
    AssignRoleComponent,
    AddNewGroupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatTableModule,
    MatDialogModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
