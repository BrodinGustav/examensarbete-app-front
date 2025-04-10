export interface LeaderboardFetch {
  user: {
    name: string;
  };
  duration: number;
  activity: {
    name: string;
    points: number;
  };
}
