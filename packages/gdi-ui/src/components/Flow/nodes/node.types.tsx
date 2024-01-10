export type CustomNodeProps = {
  data: Json;
  handles: 'input' | 'output' | 'both' | 'none';
  children?: React.ReactNode;
  color?: string;
};
