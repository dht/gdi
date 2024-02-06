import React from 'react';
import { Input, Key, Keys, Suggestion, Suggestions, Wrapper } from './VisionKeyboard.style';
import VisionIcon from '../VisionIcon/VisionIcon';
import { mainKeys, bottomKeys } from './VisionKeyboard.data';
import Icon from '../../../Icon/Icon';
import classnames from 'classnames';

export type VisionKeyboardProps = {};

export function VisionKeyboard(_props: VisionKeyboardProps) {
  function renderKey(key: Json) {
    const { value, marginLeft = 0, iconName, isModifier } = key;

    const style: React.CSSProperties = {
      marginLeft: marginLeft + 'px',
    };

    const className = classnames('icon', key.id, {
      modifier: isModifier,
      hasIcon: iconName !== undefined,
    });

    return (
      <Key key={key.id} style={style} className={className}>
        {iconName ? <Icon name={iconName} /> : value}
      </Key>
    );
  }

  function renderKeys(keys: Json[]) {
    return keys.map((key: Json) => renderKey(key));
  }

  return (
    <Wrapper className='VisionKeyboard-wrapper' data-testid='VisionKeyboard-wrapper'>
      <Input>Text Preview</Input>
      <Suggestions>
        <Suggestion>I</Suggestion>
        <Suggestion>The</Suggestion>
        <Suggestion>I'm</Suggestion>
        <VisionIcon icon='mic' />
      </Suggestions>
      <Keys>{renderKeys(mainKeys)}</Keys>
      <Keys>{renderKeys(bottomKeys)}</Keys>
    </Wrapper>
  );
}

VisionKeyboard.panelType = 'keyboard';

export default VisionKeyboard;
