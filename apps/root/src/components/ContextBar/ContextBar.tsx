import React from 'react';
import { Wrapper } from './ContextBar.style';
import CtxRecipeContainer from './_parts/CtxRecipe/CtxRecipe.container';
import CtxWelcomeContainer from './_parts/CtxWelcome/CtxWelcome.container';
import { ICapability } from '@gdi/store-base';

export type ContextBarProps = {};

export function ContextBar(props: ContextBarProps) {
  return (
    <Wrapper className='ContextBar-wrapper' data-testid='ContextBar-wrapper'>
      <CtxWelcomeContainer />
      <CtxRecipeContainer />
    </Wrapper>
  );
}

export default ContextBar;
