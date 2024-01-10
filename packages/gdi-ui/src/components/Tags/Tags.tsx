import React, { useRef } from 'react';
import styled from 'styled-components';
import { Wrapper } from './Tags.style';
import classnames from 'classnames';

export type TagsProps = {
  value: string[];
  options: string[];
  disabled?: boolean;
  onChange: (items: string[]) => void;
  placeholder?: string;
  autoFocus?: boolean;
  enterAsSymbol?: boolean;
  maxTags?: number;
  className?: string;
};

export const Tags = React.forwardRef((props: TagsProps, ref: any) => {
  const { value = [], options, placeholder, autoFocus, disabled, maxTags } = props;

  const refWrapper = useRef<HTMLDivElement>(null);

  function onChange(_event: React.SyntheticEvent, value: any) {
    if (maxTags && value.length > maxTags) {
      return;
    }

    props.onChange(value);
  }

  const openOnFocus = value && value.length === 0;

  const className = classnames('Tags-wrapper', props.className, {});

  return <Wrapper className={className} data-testid='Tags-wrapper' ref={refWrapper}></Wrapper>;
});

const Input = styled.div`
  input {
    height: 24px;
  }
`;

export default Tags;
