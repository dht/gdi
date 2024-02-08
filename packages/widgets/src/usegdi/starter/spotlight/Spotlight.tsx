import { UnderConstruction, Wip } from '@gdi/ui';
import { Wrapper } from './Spotlight.style';

export type SpotlightProps = {};

export function Spotlight(_props: SpotlightProps) {
  return (
    <Wrapper className='Spotlight-wrapper' data-testid='Spotlight-wrapper'>
      <Wip />
      <UnderConstruction />
    </Wrapper>
  );
}

export default Spotlight;
