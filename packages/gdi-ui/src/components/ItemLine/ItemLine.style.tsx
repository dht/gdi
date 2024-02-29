import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100px;
  background-color: rgba(235, 235, 255, 0.02);
  margin: 20px 10px;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  &.disabled {
    opacity: 0.7;
    filter: grayscale(100%);
  }
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 20px;
`;

export const Details = styled.div`
  padding-left: 20px;
  flex: 1;
`;

export const Title = styled.div`
  font-size: 40px;
`;

export const Identifier = styled.div`
  opacity: 0.5;
`;

export const Name = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Description = styled.div`
  font-size: 16px;
  opacity: 0.7;
`;
