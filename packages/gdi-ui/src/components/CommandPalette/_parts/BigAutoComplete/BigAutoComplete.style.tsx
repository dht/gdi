import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Bar = styled.div`
  background-color: #223;
  box-shadow: 0 0 3px 7px rgba(0, 0, 0, 0.15);
  color: #eee;
  height: 61px;
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #556;
  color: #eee;
  font-size: 18px;
  outline: 1px solid dodgerblue;
  padding: 8px 10px;
  flex: 1;
`;

export const Options = styled.div`
  position: absolute;
  top: 62px;
  background-color: #223;
  left: -1px;
  right: -1px;
  border-top: none;
  box-shadow: 0 0 3px 7px rgba(0, 0, 0, 0.15);
`;

export const ShortKeyWrapper = styled.div`
  margin: 0 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OptionWrapper = styled.div`
  font-size: 18px;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: #292939;
  }

  &.selected {
    background-color: #005180;
  }
`;

export const OptionTitle = styled.div`
  flex: 1;
`;

export const OptionKeys = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ColorizedTitleWrapper = styled.div`
  flex: 1;
`;

export const ColorPart = styled.span`
  color: #58c2ff;
  font-weight: bold;
`;

export const NonColorPart = styled.span``;

export const HighlightedLetter = styled.div`
  color: #00adff;
`;

export const KeyWrapper = styled.div`
  padding: 0 11px;
  border-radius: 5px;
  background-color: #334;
  box-shadow: 0 1px 1px rgba (30, 30, 40, 1), 0 2px 2px rgba(0, 0, 0, 1);
  position: relative;
  font-weight: 500;
  font-size: 16px;
  margin: 0 4px;

  &:after {
    content: '';
    width: 100%;
    left: 0;
    position: absolute;
    top: 0;
    bottom: -4px;
    border-radius: 5px;
    border: 1px solid #334;
  }

  &.selected {
    background-color: #176d9e;

    &:after {
      border: 1px solid #195070;
    }
  }
`;
