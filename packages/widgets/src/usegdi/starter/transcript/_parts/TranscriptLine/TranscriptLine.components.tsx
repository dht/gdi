import styled from 'styled-components';
import { lz } from './TranscriptLine.utils';

export function Timestamp(props: any) {
  const { value } = props;

  const seconds = Math.floor(value / 1000);
  const millis = Math.floor((value % 1000) / 10);

  return (
    <Wrapper>
      {seconds}
      <span>{lz(millis)}</span>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  color: pink;
  margin-right: 20px;
  padding: 0 20px;

  span {
    margin-left: 5px;
    font-size: 12px;
  }
`;
