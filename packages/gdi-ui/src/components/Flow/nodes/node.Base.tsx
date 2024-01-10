import classnames from 'classnames';
import { Handle, Position } from 'reactflow';
import { NodeBottomBar } from '../_parts/NodeBottomBar/NodeBottomBar';
import { NodeTopBar } from '../_parts/NodeTopBar/NodeTopBar';
import { Label, Wrapper } from './node.Base.style';
import { CustomNodeProps } from './node.types';

export function CustomNode(props: CustomNodeProps) {
  const { data, handles } = props;
  const { name, isRunning, isEnd, status } = data;

  const className = classnames(props.color, {
    running: isRunning,
    error: status === 'error',
    done: isEnd && status === 'done',
  });

  function renderInputHandle() {
    if (handles === 'input' || handles === 'both') {
      return <Handle type='target' position={Position.Top} />;
    }
  }

  function renderOutputHandle() {
    if (handles === 'output' || handles === 'both') {
      return <Handle type='source' position={Position.Bottom} id='a' />;
    }
  }

  return (
    <Wrapper className={className}>
      <NodeTopBar {...props} />
      {renderInputHandle()}
      {renderOutputHandle()}
      <Label>{name}</Label>
      {props.children}
      <NodeBottomBar {...props} />
    </Wrapper>
  );
}
