import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Chevron = styled.div`
  svg {
    color: #999;
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease-in-out;
  }

  &.open {
    svg {
      transform: rotate(90deg);
    }
  }
`;

export const Label = styled.h3`
  font-weight: 200;
`;

export const Content = styled.div``;
