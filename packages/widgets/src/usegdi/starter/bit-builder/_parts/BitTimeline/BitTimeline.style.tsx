import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 14px;
  display: flex;
  color: white;
  height: 30px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  border-bottom: 1px solid var(--green-200);
`;

export const Icons = styled.div`
  width: 28px;
  background-color: var(--green-100s);
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    font-size: 20px;
    color: var(--green-900s);
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--green-300s);
    }
  }
`;

export const Slide = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-width: 0;
  overflow-x: hidden;
`;
