import { Wip } from '@gdi/ui';
import { Wrapper } from './Spotlight.style';

export type SpotlightProps = {};

export function Spotlight(_props: SpotlightProps) {
  return (
    <Wrapper className='Spotlight-wrapper' data-testid='Spotlight-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default Spotlight;
