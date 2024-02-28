import React from 'react';
import { Cta, H2, H3, Li, Ol, Ul, Wrapper } from './ContextRecipe.style';

export type ContextRecipeProps = {};

export function ContextRecipe(_props: ContextRecipeProps) {
  return (
    <Wrapper
      className='ContextRecipe-wrapper'
      data-testid='ContextRecipe-wrapper'
    >
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

export default ContextRecipe;
