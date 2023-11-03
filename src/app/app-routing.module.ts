import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { COUNTRY_ENGLAND } from './sharing/constant/constants';

const routes: Routes = [
  { path: '', redirectTo: `/country/` + COUNTRY_ENGLAND, pathMatch: 'full' },
  { path: 'country/:leagueId', component: CountrySelectorComponent },
  { path: 'team/:leagueId/:teamId', component: TeamDetailComponent },
  { path: '**', redirectTo: '/country/' + COUNTRY_ENGLAND },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
