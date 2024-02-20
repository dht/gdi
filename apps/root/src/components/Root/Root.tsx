import MuxContainer from '../Mux/Mux.container';
import VillageContainer from '../Village/Village.container';
import { Wrapper } from './Root.style';

export type RootProps = {
  root: string;
};

export function Root(props: RootProps) {
  const { root } = props;

  function renderInner() {
    if (root === 'mux') {
      return <MuxContainer />;
    } else {
      return <VillageContainer />;
    }
  }

  return (
    <Wrapper className='Root-wrapper' data-testid='Root-wrapper'>
      {renderInner()}
    </Wrapper>
  );
}

export default Root;
