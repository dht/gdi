import React, { useEffect, useState } from 'react';
import { Wrapper } from './Vision.style';
import { allPanels } from './_parts';
import VisionPanel from './_parts/VisionPanel/VisionPanel';
import { PanelId } from './Vision.types';
import classnames from 'classnames';

export type VisionProps = {
  panelId: PanelId;
  bk: 'transparent' | 'image' | 'black';
  onNavigate: (id: string) => void;
};

export function Vision(props: VisionProps) {
  const { panelId, bk } = props;
  const [id, setId] = useState(panelId);
  const [show, setShow] = useState(false);

  const Cmp: any = allPanels[id];

  useEffect(() => {
    setShow(false);

    const timeout = setTimeout(() => {
      setId(panelId);
      setShow(true);
    }, 400);

    return () => {
      clearTimeout(timeout);
    };
  }, [panelId]);

  function renderInner() {
    if (!Cmp) {
      return null;
    }

    return <Cmp onNavigate={props.onNavigate} />;
  }

  const className = classnames('Vision-wrapper', {
    show,
  });

  return (
    <Wrapper className={className} data-testid='Vision-wrapper'>
      <VisionPanel id={panelId} panelType={Cmp?.panelType} bk={bk}>
        {renderInner()}
      </VisionPanel>
    </Wrapper>
  );
}

export default Vision;
