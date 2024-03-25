export type IGuidance = {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
  meta: IGuidanceMeta;
  description: string;
  tags: string[];
  points: IGuidancePoint[];
  audios: IGuidanceAudio[];
  regions: IGuidanceRegion[];
};

export type IGuidanceMeta = {
  totalDuration: number;
};

export type IGuidancePoint = {
  id: string;
  timestamp: number;
  selector: string;
  pointType: PointType;
};

export type IGuidanceAudio = {
  id: string;
  voiceId: string;
  characterId?: string;
  content: string;
  contentPhonetics: string;
};

export type IGuidanceRegion = {
  id: string;
  content: string;
  timestamp: number;
};

export type PointType = 'click' | 'input';
