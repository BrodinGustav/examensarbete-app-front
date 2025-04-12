export interface LeaderboardUser {
  name: string;
  totalPoints: number;
  activities: {
    activity: string;
    duration: string;
    points: number;
  }[];
}
