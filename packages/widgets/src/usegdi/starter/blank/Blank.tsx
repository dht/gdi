import { UnderConstruction, Wip } from '@gdi/ui';
import { Wrapper } from './Blank.style';

export type BlankProps = {
  showBigWip?: boolean;
};

export function Blank(props: BlankProps) {
  const { showBigWip } = props;

  return (
    <Wrapper className='Blank-wrapper' data-testid='Blank-wrapper'>
      <Wip />

      {showBigWip && <UnderConstruction />}
    </Wrapper>
  );
}

export default Blank;
