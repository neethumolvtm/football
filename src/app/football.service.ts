// football.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Standing, Fixture1, Root } from './standings.interface';
import { Fixture, RootData } from './fixture.interface';
@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private apiUrl = 'https://v3.football.api-sports.io/standings';
  private apiUrlfixtures = 'https://v3.football.api-sports.io/fixtures';
  constructor(private http: HttpClient) {}

  getStandings(league: number, season: number): Observable<Standing[]> {
    const url = `${this.apiUrl}?league=${league}&season=${season}`;

    return this.http
      .get<Root>(url)
      .pipe(
        map((data: Root) => data.response[0].league.standings[0] as Standing[])
      );
  }

  getFixtures(
    league: number,
    season: number,
    team: number,
    last: number
  ): Observable<Fixture[]> {
    const url = `${this.apiUrlfixtures}?league=${league}&season=${season}&team=${team}&last=${last}`;
    return this.http
      .get<RootData>(url)
      .pipe(map((data: RootData) => data.response as Fixture[]));
  }
}
