import { format } from '@gdi/ui';
import { Cell, Row, Value, Wrapper } from './DetailsApis.style';

export type DetailsApisProps = {
  board: Json;
};

export function DetailsApis(props: DetailsApisProps) {
  const { board } = props;
  const { editMode, dependencies, apis, playbackMode, lastUpdated } = board;

  const formattedDate = format.date.db(lastUpdated);
  const timeAgo = format.date.timeAgo(lastUpdated);

  return (
    <Wrapper className='DetailsApis-wrapper' data-testid='DetailsApis-wrapper'>
      <Row>
        <Cell>
          <label>EDIT</label>
          <Value>{editMode ? 'Enabled' : 'Disabled'}</Value>
        </Cell>
        <Cell>
          <label>PLAYBACK</label>
          <Value>{playbackMode ? 'Enabled' : 'Disabled'}</Value>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <label>DEPS</label>
          <Value>{Object.values(dependencies).join(', ')}</Value>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <label>APIs</label>
          <Value>{apis.join(', ')}</Value>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <label>LAST UPDATED</label>
          <Value>
            {formattedDate} <span>({timeAgo})</span>
          </Value>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default DetailsApis;
