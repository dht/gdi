import React, { useEffect, useMemo, useState } from 'react';
import { Wrapper } from './ElementPosition.style';
import { addListener, invokeEvent } from 'shared-base';
import ParamsTable from '../ParamsTable/ParamsTable';
import { parseElementInfo } from './ElementPosition.utils';

export type ElementPositionProps = {
  onClick: (commandId: string) => void;
  elementLabels: Json;
};

export function ElementPosition(props: ElementPositionProps) {
  const { elementLabels } = props;
  const [alternative, setAlternative] = useState(false);

  const [params, setParams] = useState({
    id: '',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
  });

  function onClick() {
    props.onClick('elementRename');
  }

  function onKeyClick(_key: string) {
    setAlternative(!alternative);
  }

  function onValueClick(key: string, value: string) {
    invokeEvent('set/pos', {
      trackId: 'element',
      id: params.id,
      key,
      value,
    });
  }

  useEffect(() => {
    const listener = addListener('element/move', (event: any) => {
      setParams(event);
    });

    return () => {
      listener();
    };
  }, []);

  const data = useMemo(() => {
    return parseElementInfo(params, elementLabels, alternative);
  }, [params, alternative]);

  return (
    <Wrapper className='ElementPosition-wrapper' data-testid='ElementPosition-wrapper'>
      <ParamsTable
        label={data.label}
        value={data}
        onClick={onClick}
        onKeyClick={onKeyClick}
        onValueClick={onValueClick}
      />
    </Wrapper>
  );
}

export default ElementPosition;
