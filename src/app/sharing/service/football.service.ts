// football.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Root, Standing } from '../interface/standings.interface';
import { Fixture, RootData } from '../interface/fixture.interface';
import { API_URL_FIXTURES, API_URL_STANDING } from '../constant/constants';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  constructor(private http: HttpClient) {}

  getStandings(league: number, season: number): Observable<Standing[]> {
    const url = `${API_URL_STANDING}?league=${league}&season=${season}`;
    return this.http
      .get<Root>(url)
      .pipe(
        map(
          (data: Root) => data?.response[0]?.league?.standings[0] as Standing[]
        )
      );
  }

  getFixtures(
    league: number,
    season: number,
    team: number,
    last: number
  ): Observable<Fixture[]> {
    const url = `${API_URL_FIXTURES}?league=${league}&season=${season}&team=${team}&last=${last}`;
    return this.http
      .get<RootData>(url)
      .pipe(map((data: RootData) => data?.response as Fixture[]));
  }
}
