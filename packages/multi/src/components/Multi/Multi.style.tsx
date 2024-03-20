import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  --grid: rgba(0, 0, 0, 0.15);
  --bk: white;
  --border: #000;

  &.dark {
    --grid: rgba(255, 255, 255, 0.15);
    --bk: #1e1e2e;
    --border: #aaa;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;

export const External = styled.div`
  background-color: var(--bk);
  display: flex;
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
`;
