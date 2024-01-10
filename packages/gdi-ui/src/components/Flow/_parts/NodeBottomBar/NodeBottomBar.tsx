import { useMemo } from 'react';
import { CustomNodeProps } from '../../nodes/node.types';
import { Value, Wrapper } from './NodeBottomBar.style';
import { get } from 'lodash';

export type NodeBottomBarProps = CustomNodeProps & {};

export function NodeBottomBar(props: NodeBottomBarProps) {
  const { data } = props;
  const { assistant, api } = data;

  const items = useMemo(() => {
    return [
      data.nodeType, //
      get(assistant, 'name'),
      get(assistant, 'model'),
      get(api, 'id'),
      get(api, 'endpoint'),
      get(api, 'vendor'),
    ].filter((i) => i);
  }, [data]);

  function renderItems() {
    return items
      .filter((i) => i)
      .map((item, index) => {
        return <Value key={index}>{item}</Value>;
      });
  }

  return (
    <Wrapper className='NodeBottomBar-wrapper' data-testid='NodeBottomBar-wrapper'>
      {renderItems()}
    </Wrapper>
  );
}

const add = (value: string, units: string) => {
  if (!value) {
    return '';
  }

  return `${value} ${units}`;
};

export default NodeBottomBar;
