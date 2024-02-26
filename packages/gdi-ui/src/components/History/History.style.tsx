import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: fixed;
  top: 200px;
  right: 300px;
  width: 500px;
  height: 600px;
  background-color: white;
  font-size: 22px;
  box-shadow: 5px -5px 2px 20px rgba(0, 0, 0, 0.5),
    15px -15px 2px 20px rgba(0, 0, 0, 0.5);

  // 3d rotate with perpective
  perspective: 1000px;
  transform: rotateX(40deg) rotateY(5deg) rotateZ(0deg) scaleX(0.8);
`;
