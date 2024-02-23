import styled from 'styled-components';
import Container from '../Container/Container';

export const Wrapper = styled(Container)`
  min-height: 830px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScreenShot = styled.div`
  background-image: url(/hero.png);
  width: 860px;
  height: 447px;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
`;

export const Title1 = styled.div`
  font-size: 70px;
  font-weight: bold;
  background: linear-gradient(45deg, #f83a3a 10%, #f13dd4 50%, #7000ff 90%);
  -webkit-background-clip: text;
  background-clip: text;
  padding: 0 20px;
  color: transparent; /* Hide the text color */
  -webkit-text-fill-color: transparent; /* Needed for Safari */
  text-align: center;
  letter-spacing: 1.2px;
  font-style: italic;
`;

export const Title2 = styled.div`
  font-size: 70px;
  font-weight: bold;
  color: white;
  text-align: center;
  letter-spacing: 1.2px;
  font-style: italic;
`;

export const Explain = styled.div`
  margin-top: 25px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  text-align: center;
  line-height: 1.4;
`;

export const Cta = styled.button`
  margin: 70px 0 16px 0;
`;

export const Versions = styled.div`
  color: rgba(255, 255, 255, 0.4);

  a,
  span {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.4);

    &:after {
      content: '|';
      margin: 0 10px;
      opacity: 0.5;
    }

    &:last-child {
      &:after {
        content: '';
        margin-right: 0;
      }
    }
  }
`;

export const Noun = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 20px;
  top: 7px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.index-0 {
    width: 60px;
  }

  &.index-1 {
    width: 260px;
  }

  &.index-2 {
    width: 160px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    border-radius: 200px 0 0 0;
    border-top: 10px solid white;
    opacity: 0.3;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 100px;
    z-index: -1;
    font-size: 60px;
    opacity: 0;
    text-align: center;
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);

    &.show {
      opacity: 1;
    }
  }
`;
