// ====================== INode ======================//
// source: store-base

export interface INode {
  id: string;
  nodeType: NodeType;
  label: string;
  promptTemplate?: IPromptTemplate;
  agent?: IAgent;
  model?: IModel;
  api?: IApi;
  position: Position;
  connectors: string[];
  price?: number;
  duration?: number;
  tokensCount?: number;
  // transient
  isRunning?: boolean;
}

export type NodeType = 'llm' | 'api' | 'outcome';

export type IPromptTemplate = {
  content: string;
};

export type ModelType = 'openAI';

export type IModel = {
  modelType: ModelType;
  modelName: string;
  temperature?: number;
  maxTokens?: number;
};

export type ApiType = 'elevenLabs' | 'dalle' | 'whisper' | 'openJourney';
export type ApiFormatInput = 'default' | 'conversation';

export type IApi = {
  apiType: ApiType;
  formatInput: ApiFormatInput;
  purpose?: string;
};

export type Position = {
  x: number;
  y: number;
};

export type AgentMode = 'continues' | 'singular';

export type IAgent = {
  mode: AgentMode;
  system: string;
  includeContext?: boolean;
};
