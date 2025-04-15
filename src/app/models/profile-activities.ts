export interface Activity {
  id: number;
  points: number;
  duration: string;
  timestamp: string;
  activity: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  activities: Activity[];
}

export interface UserApiResponse {
  message: string;
  data: UserData;
  timestamp: string;
}
