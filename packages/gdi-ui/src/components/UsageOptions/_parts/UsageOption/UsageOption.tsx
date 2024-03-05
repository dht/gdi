import React from 'react';
import { Cta, Description, Title, Wrapper } from './UsageOption.style';
import Icon from '../../../Icon/Icon';

export type UsageOptionProps = {
  value: Json;
  onSelect: (id: string) => void;
};

export function UsageOption(props: UsageOptionProps) {
  const { value } = props;
  const { id, iconName, title, description, cta } = value;

  function onSelect() {
    props.onSelect(id);
  }

  return (
    <Wrapper className='UsageOption-wrapper' data-testid='UsageOption-wrapper' onClick={onSelect}>
      <Icon className='icon' name={iconName} size={50} />
      <Title className='title'>{title}</Title>
      <Description>{description}</Description>
      <Cta>{cta}</Cta>
    </Wrapper>
  );
}

export default UsageOption;
