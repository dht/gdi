import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  border-top: 1px solid var(--green-200);
`;

export const Panel = styled.div`
  position: absolute;
  top: -42px;
  width: 300px;
  height: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 72px;
  flex: 1;
`;

export const Icons = styled.div`
  width: 28px;
  background-color: var(--green-100);
  color: var(--green-900);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--green-200);
  padding-bottom: 20px;

  .icon {
    flex: 1;
    font-size: 20px;
    border-bottom: 1px solid var(--green-200);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: var(--green-300);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const Audio = styled.div`
  flex: 1;
  display: flex;
  border-bottom: 1px solid var(--green-200);
`;

export const MobileLayerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;
