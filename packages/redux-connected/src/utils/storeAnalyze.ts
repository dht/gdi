import {
  ApiInfo,
  ApiInfoPerType,
  analyzeStructure,
  generateActionTypesDictionaryForStore,
} from 'redux-store-generator';

export class StoreAnalyzer {
  private actionTypeToInfo: ApiInfoPerType;
  private structure: any;

  constructor(private store: any) {
    const initialState = store.getState();
    this.actionTypeToInfo =
      generateActionTypesDictionaryForStore<any>(initialState);
    this.structure = analyzeStructure(initialState);
  }

  infoFromActionType(actionType: string): any | null {
    const actionInfo: ApiInfo = this.actionTypeToInfo[actionType];

    if (!actionInfo) {
      return null;
    }
    const { nodeName } = actionInfo;
    const nodeType = this.structure[nodeName];

    return {
      ...actionInfo,
      nodeType,
    };
  }
}
