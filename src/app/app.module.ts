import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartComponent } from './start/start.component';
import { BodyComponent } from './body/body.component';

export const appRoutes : Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'body', component: BodyComponent, children: [
    { path: 'sidenav', component: SidenavComponent, outlet: 'sidenav' },
    { path: 'dashboard', component: DashboardComponent, outlet: 'content' }
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    StartComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}