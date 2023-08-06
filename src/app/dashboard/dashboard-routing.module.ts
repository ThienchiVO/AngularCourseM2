import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardContentComponent,
      },
      {
        path: 'prescriptions',
        component: PrescriptionsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./calendar/calendar.module').then(m => m.CalendarModule),
      },
      {
        path: 'directory',
        loadChildren: () =>
          import('./directory/directory.module').then(m => m.DirectoryModule),
      },
      {
        path: 'maps',
        loadChildren: () =>
          import('./maps/maps.module').then(m => m.MapsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
