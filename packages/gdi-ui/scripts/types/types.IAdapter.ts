// ====================== IAdapter ======================//

export interface IAdapter {
  providerType: DataProvider;
}

export type DataProvider = 'FIRESTORE' | 'STATIC' | 'FUNCTIONS';
