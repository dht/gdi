import { format } from '@gdi/ui';
import { JsonMap } from './DetailsApis.components';
import { Cell, Row, Value, Wrapper } from './DetailsApis.style';

export type DetailsApisProps = {
  board: Json;
};

export function DetailsApis(props: DetailsApisProps) {
  const { board } = props;
  const { author, boardInfo, dependencies, apis = {} } = board;
  const { boardType, tsVersion } = boardInfo ?? {};

  const apiExists = Object.keys(apis).length > 0;

  const formattedDate = format.date.db(tsVersion);
  const timeAgo = format.date.timeAgo(tsVersion);

  return (
    <Wrapper className='DetailsApis-wrapper' data-testid='DetailsApis-wrapper'>
      <Row>
        <Cell>
          <label>BOARD TYPE</label>
          <Value>{boardType}</Value>
        </Cell>
        <Cell>
          <label>AUTHOR</label>
          <Value>{author}</Value>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <label>DEPS</label>
          <Value>
            <JsonMap json={dependencies} />
          </Value>
        </Cell>
      </Row>
      {apiExists && (
        <Row>
          <Cell>
            <label>APIs</label>
            <Value>
              {' '}
              <JsonMap json={apis} />
            </Value>
          </Cell>
        </Row>
      )}
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
