export interface Root {
  response: Response[];
}
export interface Fixture1 {
  team: {
    id: number;
    logo: string;
    name: string;
  };
  rank: number;
  all: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  goalsDiff: number;
  points: number;
}

export interface Parameters {
  league: string;
  season: string;
}

export interface Paging {
  current: number;
  total: number;
}

export interface Response {
  league: League;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Standing[][];
}

export interface Standing {
  rank?: number;
  team?: Team;
  points?: number;
  goalsDiff?: number;
  group?: string;
  form?: string;
  status?: string;
  description?: string;
  all?: All;
  home?: Home;
  away?: Away;
  update?: string;
}

export interface Team {
  id: number | '';
  name: string;
  logo: string;
}

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Goals {
  for: number;
  against: number;
}

export interface Home {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals2;
}

export interface Goals2 {
  for: number;
  against: number;
}

export interface Away {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals3;
}

export interface Goals3 {
  for: number;
  against: number;
}

export interface Standings1 {
  rank: number;
  team: {
    logo: string | undefined;
    name: string | undefined;
    id: number;
  };
  all: {
    played: number | undefined;
    win: number;
    lose: number;
    draw: number;
  };
  goalsDiff: number;
  points: number;
}

export interface StandingsApiResponse1 {
  data: {
    response: [
      {
        league: {
          standings: Standings1[];
        };
      }
    ];
  };
}
