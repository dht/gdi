import React from 'react';
import { Wrapper } from './VisionPanel.style';
import { PanelId, PanelType } from '../../Vision.types';
import classnames from 'classnames';

export type VisionPanelProps = {
  id: PanelId;
  panelType: PanelType;
  children?: React.ReactNode;
  bk: 'transparent' | 'image' | 'black';
};

export function VisionPanel(props: VisionPanelProps) {
  const { id, bk } = props;

  const className = classnames('VisionPanel-wrapper', id, bk, {});

  return (
    <Wrapper className={className} data-testid='VisionPanel-wrapper'>
      {props.children}
    </Wrapper>
  );
}

export default VisionPanel;
