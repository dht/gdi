import React from 'react';
import { Wrapper } from './PostWriterTone.style';
import { parameters, initialState } from './PostWriterTone.data';
import { BootstrapParams } from '@gdi/ui';

export type PostWriterToneProps = {
  options: any;
  onChange: (data: any) => void;
};

export function PostWriterTone(props: PostWriterToneProps) {
  const { options } = props;

  return (
    <Wrapper className='PostWriterTone-wrapper' data-testid='PostWriterTone-wrapper'>
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

export default PostWriterTone;
