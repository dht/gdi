import React, { useEffect, useMemo, useState } from 'react';
import { Wrapper } from './CameraPosition.style';
import { addListener, invokeEvent } from 'shared-base';
import ParamsTable from '../ParamsTable/ParamsTable';
import { parseCameraInfo } from './CameraPosition.utils';

export type CameraPositionProps = {
  onClick: (commandId: string) => void;
};

export function CameraPosition(props: CameraPositionProps) {
  const [alternative, setAlternative] = useState(false);

  const [params, setParams] = useState({
    id: '',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    alpha: 0,
    beta: 0,
    radius: 0,
  });

  function onClick() {
    props.onClick('camera');
  }

  function onKeyClick(_key: string) {
    setAlternative(!alternative);
  }
  function onValueClick(key: string, value: string) {
    invokeEvent('set/pos', {
      trackId: 'camera',
      id: params.id,
      key,
      value,
    });
  }

  useEffect(() => {
    const listener = addListener('camera/move', (event: any) => {
      setParams(event);
    });

    return () => {
      listener();
    };
  }, []);

  const data = useMemo(() => {
    return parseCameraInfo(params, alternative);
  }, [params, alternative]);

  return (
    <Wrapper className='CameraPosition-wrapper' data-testid='CameraPosition-wrapper'>
      <ParamsTable
        label={data.id}
        value={data}
        onClick={onClick}
        onKeyClick={onKeyClick}
        onValueClick={onValueClick}
      />
    </Wrapper>
  );
}

export default CameraPosition;
