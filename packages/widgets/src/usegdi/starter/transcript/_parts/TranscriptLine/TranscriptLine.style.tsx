import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 1.7;

  &:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &.past {
    opacity: 0.7;
  }

  &.current {
  }

  &.future {
    opacity: 0.2;
  }
`;

export const Speaker = styled.div`
  font-size: 16rem;
  min-width: 80rem;
  &.speaker-1 {
    color: #aaa;
  }

  &.speaker-2 {
    color: #aaa;
  }

  &.speaker-3 {
    color: #aaa;
  }

  &.current {
    color: gold;
  }
`;

export const Letter = styled.div`
  border: 1px solid white;
  padding: 6rem 10rem;
  border-radius: 5rem;
  margin-right: 5rem;
  font-size: 14rem;

  &.current {
    color: gold;
    border: 1px solid goldenrod;
  }
`;

export const Content = styled.div`
  line-height: 1.6;
  font-size: 20rem;
`;
