import { useContext } from 'react';
import { useMount } from 'react-use';
import { TrelloContext } from './Trello.context';
import { Wrapper } from './Trello.style';
import Buckets from './_parts/Buckets/Buckets';
import { data } from './Trello.data';

export type TrelloProps = {};

export function Trello(_props: TrelloProps) {
  const { callbacks, patchState, state } = useContext(TrelloContext);
  const { config, isReady } = state;

  useMount(() => {
    patchState({
      sortDirection: 'asc',
    });
  });

  if (!isReady) {
    return null;
  }

  return (
    <Wrapper className='Trello-wrapper' data-testid='Trello-wrapper'>
      <Buckets config={config} callbacks={callbacks as any} data={data} />
    </Wrapper>
  );
}

export default Trello;
