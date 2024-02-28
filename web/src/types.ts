export type Json = Record<string, any>;

export type GdiLog = {
  id: string;
  message: string;
  source: string;
  timestamp: number;
  verb: string;
  data: Json;
};

export type IHashInfo = {
  hash: string;
  boardDbPath: string;
  dbType: 'none' | 'static' | 'dynamic';
};

