import React from 'react';
import { Cta, H2, H3, Li, Ol, Ul, Wrapper } from './CtxRecipe.style';

export type CtxRecipeProps = {};

export function CtxRecipe(_props: CtxRecipeProps) {
  return (
    <Wrapper className='CtxRecipe-wrapper' data-testid='CtxRecipe-wrapper'>
      <H2>Create a 3d animation</H2>
      <H3>Ingredients</H3>
      <Ul>
        <Li>Script</Li>
        <Li>Voiceover</Li>
        <Li>3D assets</Li>
      </Ul>
      <H3>Instructions</H3>
      <Ol>
        <Li>Generate a script</Li>
        <Li>Upload 3D assets</Li>
        <Li>Generate voiceover</Li>
        <Li>Create a scene</Li>
        <Li>Animate scene</Li>
      </Ol>
      <Cta>Start workflow ⌘⏎</Cta>
    </Wrapper>
  );
}

export default CtxRecipe;
