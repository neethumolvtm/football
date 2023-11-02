import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';

const routes: Routes = [
  { path: '', redirectTo: '/country/39', pathMatch: 'full' },
  { path: 'country/:leagueId', component: CountrySelectorComponent },
  { path: 'team/:leagueId/:teamId', component: TeamDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
