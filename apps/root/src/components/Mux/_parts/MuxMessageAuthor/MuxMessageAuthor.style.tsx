import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 12px;
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  fill: white;

  &.user {
    background-color: rgb(178, 25, 195);
    background-image: url(/person.svg);
    background-size: 21px 21px;
  }

  &.assistant {
    background-color: rgb(25, 195, 125);
    background-image: url(/gpt.svg);
  }
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
