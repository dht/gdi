import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  min-height: 100%;
  position: relative;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;
  background-image: linear-gradient(
    180deg,
    #00000066 0%,
    #222233ff 20%,
    #222233ff 90%,
    #00000067 100%
  );

  #inspector-host {
    position: fixed !important;
    top: 120px;
    bottom: 20px;
    right: 80px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;

  &:nth-child(1) {
    max-width: 700px;
    margin: 0 30px;
  }

  &:nth-child(2) {
    margin: 4px;
    overflow: auto;

    @media (max-width: 1340px) {
      max-height: calc(100vh - 130px);
    }
  }
`;

export const WrapperBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #112;
  display: flex;
`;
