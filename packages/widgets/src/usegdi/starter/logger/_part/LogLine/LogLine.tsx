import Loader from '../Loader/Loader';
import Timestamp from '../Timestamp/Timestamp';
import { Data, Divider, Message, Source, SourceAndVerb, Verb, Wrapper } from './LogLine.style';

export type LogLineProps = {
  log: Json;
};

export function LogLine(props: LogLineProps) {
  const { log } = props;
  const { source, verb, timestamp, message, data, isRunning, delta } = log;

  return (
    <Wrapper className='LogLine-wrapper' data-testid='LogLine-wrapper'>
      <Timestamp value={timestamp} />
      <SourceAndVerb>
        <Source>{source}</Source>
        <Divider>|</Divider>
        <Verb>{verb}</Verb>
      </SourceAndVerb>
      <Message>
        {message}
        <Loader isRunning={isRunning} />
      </Message>
      {delta && <Timestamp color='gold' value={delta} />}
      {data && <Data onClick={() => console.log(data)}>data</Data>}
    </Wrapper>
  );
}

export default LogLine;
