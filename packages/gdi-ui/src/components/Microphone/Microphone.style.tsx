import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40rem;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Popup = styled.div`
  position: absolute;
  bottom: 40px;
  height: 175px;
  background-color: #333;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #999;
  width: 250px;
`;

export const Button = styled.div`
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.1s ease-in-out;
  background-color: #333;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #ff0000;
  }

  &:active {
    background-color: #ff0000;
    top: 2px;
    left: 2px;
  }
`;

export const WaveForm = styled.canvas`
  width: 100%;
  height: 100px;
  background-color: #f0f0f0;
`;

export const Transcript = styled.div`
  text-align: center;
  font-size: 15px;
  line-height: 23px;
  color: #444;
  max-width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: auto;
`;

export const Top = styled.div`
  cursor: pointer;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fff9fa;
  }
`;

export const Record = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: red;
  border-radius: 50%;
  animation: pulse 1s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.6);
    }
    70% {
      box-shadow: 0 0 0 10rem rgba(255, 0, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
    }
  }
`;
