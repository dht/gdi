import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 5rem;
  box-shadow: 0 4rem 6rem -1rem rgb(0 0 0 / 15%), 0 2rem 4rem -1rem rgb(0 0 0 / 8%);
  padding: 10rem 2rem;
  z-index: 2;
  max-height: 92rem;
  border: 1px solid rgba(0, 0, 0, 0.3);

  @media (max-width: 800px) {
    zoom: 0.7;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 40rem;

  .Icon-wrapper {
  }

  > i {
    margin: 0 10rem;
    cursor: pointer;
  }

  flex: 1;
`;

export const Button = styled.div`
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  .Icon-wrapper {
    font-size: 30rem;
  }

  &:hover {
    color: palevioletred;
  }

  &:active {
    bottom: 1px;
    left: 1px;
  }
`;

export const Stage = styled.div`
  color: #999;
  font-size: 18rem;
  text-align: center;
  padding: 10rem 0;
  flex: 1;
`;
