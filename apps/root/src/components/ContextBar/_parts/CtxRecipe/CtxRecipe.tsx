import {
  ICapability,
  ICapabilityIngredient,
  ICapabilityInstruction,
} from '@gdi/store-base';
import { useKey } from 'react-use';
import { Cta, H2, H3, Li, Ol, Ul, Wrapper } from './CtxRecipe.style';

export type CtxRecipeProps = {
  capability: ICapability;
  onStart: () => void;
};

export function CtxRecipe(props: CtxRecipeProps) {
  const { capability } = props;

  const { instructions, ingredients } = capability;

  useKey('Enter', (ev: any) => {
    if (!ev.metaKey) return;
    props.onStart();
  });

  function renderInstruction(instruction: ICapabilityInstruction) {
    const { name } = instruction;
    return (
      <Li key={instruction.id} className='instruction'>
        {name}
      </Li>
    );
  }

  function renderInstructions() {
    return instructions.map((instruction: ICapabilityInstruction) =>
      renderInstruction(instruction)
    );
  }

  function renderIngredient(ingredient: ICapabilityIngredient) {
    const { name } = ingredient;
    return (
      <Li key={ingredient.id} className='ingredient'>
        {name}
      </Li>
    );
  }

  function renderIngredients() {
    return ingredients.map((ingredient: ICapabilityIngredient) =>
      renderIngredient(ingredient)
    );
  }

  return (
    <Wrapper className='CtxRecipe-wrapper' data-testid='CtxRecipe-wrapper'>
      <H2>Create a 3d animation</H2>
      <H3>Ingredients</H3>
      <Ul>{renderIngredients()}</Ul>
      <H3>Instructions</H3>
      <Ol>{renderInstructions()}</Ol>
      <Cta onClick={props.onStart}>Start workflow ⌘⏎</Cta>
    </Wrapper>
  );
}

export default CtxRecipe;
