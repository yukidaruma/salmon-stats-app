export type PlayerId = string;
export type BossId = string | number;
export type BossIdKeys = '3' | '6' | '9' | '12' | '13' | '14' | '15' | '16' | '21';

export interface Schedule {
  scheduleId: string;
  startAt: Date;
  endAt: Date;
  weapons: number[];
  stageId: number;
  rareWeaponId: null | 20000 | 20010 | 20020 | 20030;
}

export interface UserData {
  isRegistered: boolean;
  playerId: string;
  name: string;
  avatar?: string;
  results?: {
    clear: number;
    fail: number;
  };
  total?: {
    boss_elimination_count: number;
    death: number;
    golden_eggs: number;
    power_eggs: number;
    rescue: number;
  };
}

export interface User {
  id: number;
  name: string;
  player_id: PlayerId;
  twitter_id: string;
}
