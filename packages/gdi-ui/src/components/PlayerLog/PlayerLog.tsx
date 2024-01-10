import { useRef } from 'react';
import { Icon } from '../Icon/Icon';
import {
  Data,
  Elements,
  Index,
  Item,
  Items,
  Message,
  Scope,
  Timestamp,
  Wrapper,
} from './PlayerLog.style';
import { parseMessage } from './PlayerLog.utils';
import LogBit from './_parts/LogBit/LogBit';
import LogElementInfo from './_parts/LogElementInfo/LogElementInfo';
import { Info, infos } from './PlayerLog.data';

export type PlayerLogProps = {
  logs: Json[];
  bit: Json;
  elementsInfo: Info[];
};

export function PlayerLog(props: PlayerLogProps) {
  const { logs, bit, elementsInfo } = props;
  const ref = useRef<HTMLDivElement>(null);

  function renderLog(log: Json) {
    const { index, ts, scope, message, data, iconName = 'remove' } = log;

    return (
      <Item key={index} className='log'>
        <Icon className='type' name={iconName} />
        <Index>{index}</Index>
        {scope && <Scope>{scope}: </Scope>}
        <Message>{parseMessage(message, data)}</Message>
        <Data>
          <Icon className='data' onClick={() => console.log(data)} name='database' />
        </Data>
        <Timestamp>{ts.toFixed(2)}</Timestamp>
      </Item>
    );
  }

  function renderLogs() {
    return [...logs].reverse().map((log: Json) => renderLog(log));
  }

  function renderInfo(info: Json) {
    return <LogElementInfo key={info.id} info={info} />;
  }

  function renderInfos() {
    return elementsInfo.map((info: Json) => renderInfo(info));
  }

  return (
    <Wrapper className='PlayerLog-wrapper' data-testid='PlayerLog-wrapper' ref={ref}>
      <Items>{renderLogs()}</Items>
      <Elements>
        <LogBit bit={bit} />
        {renderInfos()}
      </Elements>
    </Wrapper>
  );
}

export default PlayerLog;
