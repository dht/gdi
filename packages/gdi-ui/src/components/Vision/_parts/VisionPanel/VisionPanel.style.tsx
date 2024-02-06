import styled from 'styled-components';

export const Wrapper = styled.div`
  backdrop-filter: blur(15px); /* Adjust blur value as needed */
  border-radius: 30px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;

  &.keyboard {
    overflow: hidden;
  }

  &.black {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
