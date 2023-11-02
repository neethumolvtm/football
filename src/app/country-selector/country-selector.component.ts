import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Standing } from '../sharing/interface/standings.interface';
import { LoadingService } from '../sharing/service/loading.service';
import { FootballService } from '../sharing/service/football.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css'],
})
export class CountrySelectorComponent implements OnInit {
  selectedCountry: number = 39;
  standings: Standing[] = [];
  standingsData = [];
  currentYear: number;
  league!: number;
  currentUrl: string;
  isLoading: boolean | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private footballService: FootballService,
    public loadingService: LoadingService
  ) {
    this.currentYear = new Date().getFullYear();
    this.route.params.subscribe((params) => {
      this.league = params['leagueId'];
    });
    this.currentUrl = this.router.url;
    this.loadingService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
    this.selectCountry(this.league ? this.league : 39);
  }

  isMenuSelected(expectedUrl: string): boolean {
    return this.currentUrl.includes(expectedUrl);
  }

  selectCountry(id: number) {
    this.footballService
      .getStandings(id, this.currentYear)
      .subscribe((data: Standing[]) => {
        this.standings = data;
      });
  }

  goToTeamResults(team: number | '' | undefined) {
    console.log(team);
    this.router.navigate(['/team', this.league, team]);
  }
}
