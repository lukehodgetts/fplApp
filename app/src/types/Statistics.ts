interface Statistic {
  team: {
    name: string;
    logo: string;
  };
  games: {
    position: string;
    rating: string;
    appearences: number;
    lineups: number;
    minutes: number;
  };
  substitutes: {
    in: number;
    out: number;
    bench: number;
  };
  shots: {
    total: number;
    on: number;
  };
  goals: {
    total: number;
  };
  passes: {
    total: number;
    key: number;
    accuracy: number;
  };
  tackles: {
    total: number;
    blocks: number;
    interceptions: number;
  };
  duels: {
    won: number;
  };
  fouls: {
    committed: number;
  };
  cards: {
    yellow: number;
    red: number;
  };
  penalty: {
    scored: number;
    missed: number;
  };
}

export default Statistic