import React from 'react';
import { Wrapper } from './ContextBar.style';
import CtxRecipeContainer from './_parts/CtxRecipe/CtxRecipe.container';
import CtxWelcomeContainer from './_parts/CtxWelcome/CtxWelcome.container';

export type ContextBarProps = {};

export function ContextBar(_props: ContextBarProps) {
  return (
    <Wrapper className='ContextBar-wrapper' data-testid='ContextBar-wrapper'>
      {/* <CtxRecipeContainer /> */}
      <CtxWelcomeContainer />
    </Wrapper>
  );
}

export default ContextBar;
