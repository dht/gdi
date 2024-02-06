import React from 'react';
import { Action, Actions, Header, Wrapper, Zoom } from './VisionBar.style';
import VisionIcon from '../VisionIcon/VisionIcon';
import { PanelType } from '../../Vision.types';
import classnames from 'classnames';
import VisionInput from '../VisionInput/VisionInput';

export type VisionBarProps = {
  header?: string;
  actions: Json[];
  barType: PanelType;
};

export function VisionBar(props: VisionBarProps) {
  const { header, actions, barType } = props;

  function renderAction(action: Json) {
    const { iconName, flavour, position, left, value } = action;

    const style: React.CSSProperties = {};

    if (position === 'absolute') {
      style.position = position;
      style.left = left + 'px';
    }

    if (flavour === 'addressBar') {
      return <VisionInput key='input' type='address-bar' value={value} />;
    } else if (flavour === 'zoom') {
      return <Zoom key='zoom'>86%</Zoom>;
    }

    return (
      <Action key={action.id} style={style} className='action'>
        <VisionIcon icon={iconName} />
      </Action>
    );
  }

  function renderActions() {
    return actions.map((action: Json) => renderAction(action));
  }

  const className = classnames('VisionBar-wrapper', barType, {});

  return (
    <Wrapper className={className} data-testid='VisionBar-wrapper'>
      {header && <Header>{header}</Header>}
      <Actions className='actions'>{renderActions()}</Actions>
    </Wrapper>
  );
}

export default VisionBar;
