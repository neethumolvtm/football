import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Fixture } from '../sharing/interface/fixture.interface';
import { FootballService } from '../sharing/service/football.service';
import { LoadingService } from '../sharing/service/loading.service';
import { CURRENT_YEAR, LAST_TEN } from '../sharing/constant/constants';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {
  fixtures!: Fixture[];
  leagueId!: number;
  teamId!: number;
  isLoading: boolean | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private footballService: FootballService,
    public loadingService: LoadingService
  ) {
    this.route.params.subscribe((params) => {
      this.leagueId = params['leagueId'];
      this.teamId = params['teamId'];
    });
    this.loadingService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
    this.footballService
      .getFixtures(this.leagueId, CURRENT_YEAR, this.teamId, LAST_TEN)
      .subscribe((data: Fixture[]) => {
        this.fixtures = data;
      });
  }

  goBack(): void {
    this.router.navigate(['/country/', this.leagueId]);
  }
}
