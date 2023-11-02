import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Fixture } from '../sharing/interface/fixture.interface';
import { FootballService } from '../sharing/service/football.service';
import { LoadingService } from '../sharing/service/loading.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {
  fixtures!: Fixture[];
  leagueId!: number;
  teamId!: number;
  currentYear: number;
  isLoading: boolean = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private footballService: FootballService,
    public loadingService: LoadingService
  ) {
    this.currentYear = new Date().getFullYear();
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
      .getFixtures(this.leagueId, this.currentYear, this.teamId, 10)
      .subscribe((data: Fixture[]) => {
        this.fixtures = data;
      });
  }

  goBack(): void {
    this.router.navigate(['/country/', this.leagueId]);
  }
}
