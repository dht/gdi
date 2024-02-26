import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  color: white;
  font-size: 14px;
  flex-direction: column;
  background-color: #111115;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex: 1;
  margin: 20px 20px 20px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  position: relative;

  &:last-child {
    max-width: 300px;
  }
`;

export const Inner = styled.div`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
  padding-bottom: 83px;
  max-height: 0;
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 10px;
  background-color: #111115;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
