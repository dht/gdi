import { Icon } from '@gdi/ui';
import MuxContainer from '../Mux/Mux.container';
import VillageContainer from '../Village/Village.container';
import { Wrapper, X } from './Root.style';

export type RootProps = {
  root: string;
  callbacks: {
    onClose: () => void;
  };
};

export function Root(props: RootProps) {
  const { root, callbacks } = props;

  function renderInner() {
    const Cmp: any = root === 'mux' ? MuxContainer : VillageContainer;

    return (
      <Cmp>
        <X title='Press ~ key'>
          <Icon size={40} name='close' onClick={callbacks.onClose} />
        </X>
      </Cmp>
    );
  }

  return (
    <Wrapper className='Root-wrapper' data-testid='Root-wrapper'>
      {renderInner()}
    </Wrapper>
  );
}

export default Root;
