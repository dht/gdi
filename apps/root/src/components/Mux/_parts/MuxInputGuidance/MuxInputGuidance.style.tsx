import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: absolute;
  top: -115px;
  width: 700px;
  height: 130px;
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

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const Title = styled.div`
  color: rgba(255, 255, 255, 0.8);
`;

export const Description = styled.div`
  color: rgba(255, 255, 255, 0.4);
  margin-top: 2px;
`;
