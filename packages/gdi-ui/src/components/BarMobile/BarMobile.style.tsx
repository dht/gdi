import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Prompt = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  font-size: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4px 5px;
  background-color: #222;
  overflow: hidden;
  transition: height 0.25s cubic-bezier(0.2, 0, 0, 1);

  &.show {
    height: 70px;
  }
`;

export const Input = styled.input`
  color: #eef;
  border: none;
  outline: none;
  background-color: #333;
  height: 40px;
  border-radius: 25px;
  text-indent: 20px;
  font-size: 18px;
  flex: 1;
`;

export const Cta = styled.div`
  background-color: white;
  color: #333;
  border: 2px solid #223;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 8px;

  .icon {
    position: relative;
    left: 1px;
  }

  &:active {
    background-color: #aaa;
  }
`;

export const TopRight = styled.div`
  position: fixed;
  top: 10px;
  left: 0;
  background-color: white;
  padding: 2px 10px 2px 5px;
  border-radius: 0 5px 5px 0;
  zoom: 0.65;

  &.darkMode {
    background-color: #000;
    color: white;
  }
`;
