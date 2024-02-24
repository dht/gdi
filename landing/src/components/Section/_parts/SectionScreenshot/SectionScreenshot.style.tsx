import styled from 'styled-components';
import Container from '../../../Container/Container';

export const Wrapper = styled(Container)`
  flex: 1;
  grid-template-columns: 495px auto;
  height: 600px;
  border-radius: 20px;
  padding: 40px 65px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    height: unset;
  }

  &.pink {
    background-image: linear-gradient(107.56deg, #ffa7a7 2.2%, #a30cb5 29.17%, #00173a 95.31%);
  }

  &.purple {
    background: linear-gradient(107.56deg, #dcf9ff, #621dba 48.44%, #04001c 95.31%),
      linear-gradient(107.56deg, #dceeff, #45e5c9 27.6%, #002119 95.31%);
    flex-direction: row-reverse;

    .media {
      right: 0;
      left: -20%;
    }

    .column {
      &:nth-child(1) {
        padding-left: 100px;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column-reverse;

      .media {
        left: -30px;
        right: unset;
      }

      .column {
        &:nth-child(1) {
          margin-top: 20px;
          padding-left: 0;
        }
      }
    }
  }

  &.cyan {
    background: linear-gradient(114.88deg, #3cd0ff, #0b0050),
      linear-gradient(107.56deg, #000e16, #0c21e0 48.44%, #05d2ff);
  }
`;

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:nth-child(1) {
    flex: 2;
  }
  &:nth-child(2) {
    flex: 3;
  }

  @media (max-width: 768px) {
    flex: unset;
  }
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 25%;
  background-color: #ffffff24;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  i {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    i {
      font-size: 30px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 20px 0;
  padding: 0;
`;

export const Description = styled.p`
  padding-right: 30px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 16px;
  margin-bottom: 30px;
`;

export const Cta = styled.button`
  width: 150px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Media = styled.div`
  width: 120%;
  height: 463px;
  right: -20%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 20px;
  background-color: #000;
  // glow
  box-shadow: 0 0 20px 10px #ffffff14;

  @media (max-width: 768px) {
    position: relative;
    max-width: 100vw;
    height: 300px;
    margin-top: 20px;
    top: unset;
    transform: unset;
    right: unset;
    left: -30px;
    max-height: 280px;
  }
`;

export const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
