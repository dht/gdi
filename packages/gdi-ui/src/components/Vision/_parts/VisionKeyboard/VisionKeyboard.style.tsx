import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  width: 580px;
  font-size: 20px;
  padding: 70px 20px 20px;
`;

export const Input = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 58px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 58px;
`;

export const Suggestions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;

  .VisionIcon-wrapper {
    width: 40px;
    height: 40px;
    background-color: #c3b5ab68;
  }
`;

export const Suggestion = styled.div`
  background-color: #c3b5ab68;
  width: 50px;
  height: 40px;
  margin: 3px 8px;
  font-size: 21px;
  border-radius: 25px;
  box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.2), -2px -2px 3px rgba(0, 0, 0, 0.05);
  flex: 1;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
`;

export const Keys = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

export const Key = styled.div`
  background-color: #c3b5ab68;
  width: 50px;
  height: 50px;
  margin: 4px 8px;
  font-size: 21px;
  border-radius: 50%;
  line-height: 47px;
  text-align: center;
  color: white;
  box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.2), -2px -2px 3px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  user-select: none;

  &:hover {
    background-color: #c3b5aba0;
  }

  &:active {
    position: relative;
    top: 2px;
    left: 2px;
  }

  &.modifier {
    background-color: #2d2c2ca3;
    font-size: 19px;
    line-height: 50px;
  }

  &.hasIcon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &.shift {
      .Icon-wrapper {
        transform: scaleX(1.2);
      }
    }

    &.backspace {
      .Icon-wrapper {
        transform: scaleX(1.2) scaleY(1.3);
      }
    }
  }

  &.backspace {
    width: 70px;
  }

  &.shift {
    width: 70px;
  }

  &.numeric {
    width: 70px;
  }

  &.emojis {
    width: 70px;
  }

  &.space {
    flex: 1;
  }

  &.return {
    width: 120px;
  }
`;
