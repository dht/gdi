import { useMemo, useState } from 'react';
import { useList } from 'react-use';
import { useCustomEvent } from '../../hooks/useCustomEvent';
import Icon from '../Icon/Icon';
import Panel from '../Panel/Panel';
import { PlayerLog } from './PlayerLog';
import { LogButton } from './PlayerLog.style';
import { useElementsInfo } from './PlayerLog.hooks';

export type PlayerLogContainerProps = {};

export function PlayerLogContainer(_props: PlayerLogContainerProps) {
  const [show, setShow] = useState(false);
  const [logs, { push, clear }] = useList<Json>([]);
  const [bit, elementsInfo] = useElementsInfo();

  useCustomEvent('player/log', (data: any) => {
    push(data);
  });

  useCustomEvent('player/clearLog', () => {
    clear();
  });

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
    <Panel id='player-log' width={1000} height={800} title='Player log' onClose={callbacks.onClose}>
      <PlayerLog logs={logs} bit={bit} elementsInfo={elementsInfo} />
    </Panel>
  );
}

export default PlayerLogContainer;
