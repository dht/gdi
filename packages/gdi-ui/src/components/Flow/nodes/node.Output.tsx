import { CustomNode as NodeBase } from './node.Base';
import { CustomNodeProps } from './node.types';

export function CustomNode(props: CustomNodeProps) {
  return <NodeBase color='palevioletred' {...props} handles='input'></NodeBase>;
}
