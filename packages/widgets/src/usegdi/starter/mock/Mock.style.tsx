import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding-bottom: 40px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #ccc;

  &.image {
    background-image: url(/boards/assets/working.jpg);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
    }
  }

  &.black {
    background-color: #000;
  }
`;

export const ToggleId = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ToggleBk = styled(ToggleId)`
  left: unset;
  right: 20px;
`;
