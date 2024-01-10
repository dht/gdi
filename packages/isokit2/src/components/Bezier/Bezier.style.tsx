import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  background-color: #111;
  width: 600px;
  height: 610px;
  --bce-sizes-curve-handle: 16px;
  --bce-padding-sm: 4px;
  --bce-padding-md: 8px;
  --bce-padding-lg: 12px;
  --bce-padding-xl: 16px;
  --bce-colors-handle-line: palevioletred;
  --bce-colors-curve-line: gold;
  --bce-colors-row: #212121;
  --bce-colors-background: #111;
  --bce-colors-outerarea: #111;
  --bce-colors-axisline: #424242;
  --bce-colors-handle-fixed: black;
  --bce-colors-handle-start: gold;
  --bce-colors-handle-end: gold;
  --bce-colors-preview: #222;
  --bce-colors-preview-border: gold;
  --bce-colors-handle-active-shadow: rgba(0, 0, 0, 0.7);
  display: grid;
  grid-template-columns: 140px 1fr;
  grid-template-rows: 80px 1fr 60px;
  overflow: hidden;
`;

export const Curve = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Values = styled.div`
  font-size: 25px;
  color: palevioletred;
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 10px;
    font-weight: 100;
    color: gold;

    &::after {
      content: ',';
      color: gray;
      font-size: 34px;
    }

    &:last-child:after {
      content: '';
    }
  }
`;

export const Actions = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  button {
    margin-left: 30px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #565;
  padding: 5px 20px;
  font-size: 16px;
  color: #676;
  cursor: pointer;
  outline: none;
  border-radius: 7px;

  &:hover {
    background-color: #333;
  }

  &.link {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Options = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  background-color: rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  overflow: auto;
`;

export const Option = styled.div`
  font-size: 20px;
  color: #465645;
  text-align: center;
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: auto;
  cursor: pointer;
  line-height: 1.3;

  &:nth-child(2n) {
    background-color: rgba(255, 255, 255, 0.03);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
