import { useRef } from 'react';
import { Icon } from '../Icon/Icon';
import { Data, Index, Item, Message, Scope, Wrapper } from './SagaLog.style';

export type SagaLogProps = {
  sagas: Json[];
};

export function SagaLog(props: SagaLogProps) {
  const { sagas } = props;
  const ref = useRef<HTMLDivElement>(null);

  function renderLog(saga: Json) {
    const { id, index, type } = saga;

    return (
      <Item key={id} className='log'>
        <Index>{index}</Index>
        <Message>{id}</Message>
        <Scope>{type}</Scope>
        <Data>
          <Icon className='data' onClick={() => console.log(saga)} name='database' />
        </Data>
      </Item>
    );
  }

  function renderLogs() {
    return [...sagas].reverse().map((log: Json) => renderLog(log));
  }
  return (
    <Wrapper className='SagaLog-wrapper' data-testid='SagaLog-wrapper' ref={ref}>
      {renderLogs()}
    </Wrapper>
  );
}

export default SagaLog;
