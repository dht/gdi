import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: absolute;
  bottom: 70px;
  width: 700px;

  @media (max-width: 800px) {
    width: 90vw;
    left: 5px;
  }
`;

export const Item = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  float: left;
  width: calc(50% - 10px);
  margin: 5px;
  padding: 12px 20px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;

  @media (max-width: 800px) {
    height: 55px;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const Title = styled.div`
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const Description = styled.div`
  color: rgba(255, 255, 255, 0.4);
  margin-top: 2px;

  @media (max-width: 800px) {
    display: none;
  }
`;
