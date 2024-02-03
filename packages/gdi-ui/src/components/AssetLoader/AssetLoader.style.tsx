import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StageBk = styled.div<{ $url: string }>`
  flex: 1;
  background-color: #111;
  background-image: url(${(props) => props.$url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Stage = styled.div<{ $url: string }>`
  background-image: url(${(props) => props.$url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  height: 100%;
`;

export const Panel = styled.div`
  height: 235px;
  background-color: black;
`;

export const Text = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  font-family: monospace;
  margin: 10px 0 15px;
`;

export const Loader = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
`;

export const Percent = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;
  font-family: monospace;
`;

export const SizeProgress = styled.div`
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Size = styled.div`
  padding: 0 8px;
`;
