import React from 'react';
import { Actions, Wrapper, Cta } from './RunLocally.style';
import Docs from '../../../Docs/Docs';
import Markdown from '../../../Markdown/Markdown';
import { markdown } from './RunLocally.data';

export type RunLocallyProps = {
  onBack: () => void;
  onDone: () => void;
};

export function RunLocally(props: RunLocallyProps) {
  return (
    <Wrapper className='RunLocally-wrapper' data-testid='RunLocally-wrapper'>
      <Markdown markdown={markdown} />
      <Actions>
        <Cta className='link' onClick={props.onBack}>
          Back
        </Cta>
        <Cta onClick={props.onDone}>Done</Cta>
      </Actions>
    </Wrapper>
  );
}

export default RunLocally;
