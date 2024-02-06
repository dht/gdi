import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 10px;

  &.top-bar,
  &.bottom-bar {
    position: absolute;
    top: -70px;
    right: 100px;
    left: 100px;
    background-color: rgba(70, 66, 57, 0.95);
    border-radius: 30px;
    height: 50px;
    justify-content: flex-start;
  }

  &.bottom-bar {
    top: unset;
    bottom: -44px;
    left: 500px;
    right: 500px;
    padding: 0 20px;
    background-color: transparent;
    background-image: linear-gradient(
      180deg,
      rgba(130, 136, 137, 0.95) 0%,
      rgba(70, 66, 57, 0.9) 100%
    );

    .actions {
      justify-content: space-between;
    }

    .VisionIcon-wrapper {
      background-color: transparent;
    }
  }
`;

export const Header = styled.div`
  color: white;
  padding: 20px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const Action = styled.div`
  margin-right: 10px;
`;

export const Zoom = styled.div`
  color: white;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 16px;
  padding-right: 20px;
`;
