import { Edge, Node, Position } from 'reactflow';

export type FlowNodeRaw = {
  id: string;
  label: string;
  type?: 'input' | 'output';
  position: Position;
  isRunning?: boolean;
  config: Partial<INodeConfig>;
  state: Partial<INodeState>;
};

export type FlowEdgeRaw = {
  id: string;
  source: string;
  target: string;
};

export type Coords = {
  x: number;
  y: number;
};

export type InData = {
  nodes: FlowNodeRaw[];
  edges: FlowEdgeRaw[];
};

export type OutData = {
  nodes: Node[];
  edges: Edge[];
};

// =========================

export enum ChainType {
  LLM = 'LLM',
  Voice = 'Voice',
  Prompt = 'Prompt',
  Completed = 'Completed',
}

export type INodeConfig = {
  chainType: ChainType;
  engine: string;
  engineParams: Json;
};

export type INodeState = {
  price: number;
  tokenCount: number;
  duration: number;
};
