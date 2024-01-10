import { useMemo, useState } from 'react';
import Icon from '../Icon/Icon';
import Panel from '../Panel/Panel';
import { SagaLog } from './SagaLog';
import { LogButton } from './SagaLog.style';

export type SagaLogContainerProps = {
  sagas: Json[];
};

export function SagaLogContainer(props: SagaLogContainerProps) {
  const { sagas } = props;
  const [show, setShow] = useState(false);

  const callbacks = useMemo(
    () => ({
      onClose: () => {
        setShow(false);
      },
    }),
    []
  );

  if (!show) {
    return (
      <LogButton>
        <Icon name='list' onClick={() => setShow(true)} />
      </LogButton>
    );
  }

  return (
    <Panel id='sagas-log' width={500} height={500} title='Sagas log' onClose={callbacks.onClose}>
      <SagaLog sagas={sagas} />
    </Panel>
  );
}

export default SagaLogContainer;
