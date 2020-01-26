export enum SubType {
  INTERNET,
  TELEPHONY,
  MOBILE,
  TELEVISION
}

export interface Usage {
  type: string;
  used: number;
  limit: number;
}

export interface Subscription {
  id: number;
  name: string;
  type: string;
  usage?: Usage[];
}
