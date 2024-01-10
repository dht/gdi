import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  bottom: 44rem;
  background-color: #333;
  z-index: 2;
  font-size: 24rem;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #555;
  padding: 5rem;
`;

export const Title = styled.div`
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
