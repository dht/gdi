import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 30px;
  height: 30px;
  background-color: #111;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    width: 20px;
    height: 20px;
    background: gold;
  }

  &.linear {
    &:after {
      width: 3px;
    }
  }

  &.continues {
    &:after {
      border-radius: 50%;
    }
  }

  &.adhoc {
    &:after {
      transform: scaleX(0.7) translateY(-5px) rotate(225deg);
      clip-path: polygon(0 0, 100% 0, 0 100%);
    }
  }
`;
