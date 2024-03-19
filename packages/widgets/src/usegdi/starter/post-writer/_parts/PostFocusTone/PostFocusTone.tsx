import React from 'react';
import { Wrapper } from './PostFocusTone.style';
import { parameters, initialState } from './PostFocusTone.data';
import { BootstrapParams } from '@gdi/ui';

export type PostFocusToneProps = {
  options: any;
  onChange: (data: any) => void;
};

export function PostFocusTone(props: PostFocusToneProps) {
  const { options } = props;

  return (
    <Wrapper className='PostFocusTone-wrapper' data-testid='PostFocusTone-wrapper'>
      <BootstrapParams
        id='post'
        options={options}
        parameters={parameters}
        initialState={initialState}
        hideLabel
        transparent
        onChange={props.onChange}
      />
    </Wrapper>
  );
}

export default PostFocusTone;
