import styled from 'styled-components';
import color from 'tinycolor2';

const base = color('rgb(85, 125, 85)');

export const green100 = base.setAlpha(0.2).toRgbString();
export const green400 = base.darken(20).setAlpha(0.8).toRgbString();
export const green900 = base.darken(15).toRgbString();

export const Wrapper = styled.div`
  flex: 1;
  border: 1rem solid ${green400};
  border-radius: 4rem;
  background-color: ${green100};
  box-shadow: 0 0 15rem 5rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: 4999;
  position: absolute;

  @media (max-width: 800px) {
    left: 0;
    right: 0;
    top: 0;
    bottom: 80px;
    background-color: #000;
  }

  &.transparent {
    background-color: transparent;
    border: none;
  }
`;

export const Header = styled.div`
  padding: 5rem 10rem;
  border-bottom: 1rem solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${green900};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  padding: 10rem;
  max-width: 100vw;

  @media (max-width: 800px) {
    max-width: 98vw;
  }

  &.transparent {
    padding: 0;
  }
`;

export const Title = styled.div`
  flex: 1;
  font-size: 16rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    cursor: pointer;
    font-size: 16rem;

    &:hover {
      color: gold;
    }
  }
`;
