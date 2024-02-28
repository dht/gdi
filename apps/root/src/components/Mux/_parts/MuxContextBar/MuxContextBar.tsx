import ContextRecipeContainer from '../../../ContextRecipe/ContextRecipe.container';
import { Wrapper } from './MuxContextBar.style';

export type MuxContextBarProps = {};

export function MuxContextBar(_props: MuxContextBarProps) {
  return (
    <Wrapper
      className='MuxContextBar-wrapper'
      data-testid='MuxContextBar-wrapper'
    >
      <ContextRecipeContainer />
    </Wrapper>
  );
}

export default MuxContextBar;
