import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 230px;
  box-sizing: border-box;
  padding: 20px 20px 10px 20px;
  --aug-tr: 25px;
  --aug-bl: 57px;
  --aug-br: 25px;
  --aug-br-inset2: 40%;
  --aug-border-all: 3px;
  --aug-inlay-all: 3px;
  --aug-inlay-bg: #000;
  /* background: linear-gradient(rgb(84, 199, 84), rgb(85, 125, 85)); */
  /* color: rgb(84, 199, 84); */
  margin-bottom: 50px;

  &.minimal {
    max-width: 50px;
    padding: 20px 8px;

    .slogan {
      display: none;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  margin-bottom: 30px;
`;

export const Gap = styled.div`
  flex: 1;
`;

export const Slogan = styled.div`
  opacity: 0.4;
  width: 60px;
  position: relative;
  font-size: 11px;
  top: -1.5px;
  left: -20px;
`;
