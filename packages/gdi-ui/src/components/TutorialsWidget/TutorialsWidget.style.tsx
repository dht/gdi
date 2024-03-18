import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 400px;
  left: 135px;
  border: 1px solid #333;
  background-color: #111;
  border-radius: 0 0 10px 10px;
  transition: top 0.3s;
`;

export const Handle = styled.div`
  flex: 1;
  position: absolute;
  width: 150px;
  height: 30px;
  bottom: -30px;
  left: 130px;
  background-color: green;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(180deg, #222222 0%, #373e43 100%);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2), inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 28px;
  font-size: 16px;
  color: #8899a6;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 22px;
`;

export const Content = styled.div``;

export const Tutorial = styled.div`
  padding: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  box-sizing: border-box;

  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 1);
  }

  &:hover {
    .title {
      border-bottom: 2px solid palevioletred;
    }
  }
`;

export const Image = styled.div`
  width: 100px;
  height: 69px;
  background-size: cover;
  border-radius: 5px;
  margin-right: 20px;
`;

export const Title = styled.div`
  display: inline-block;
  margin-top: 5px;
  font-size: 15px;
  border-bottom: 2px solid transparent;
`;

export const Description = styled.div`
  font-size: 13px;
  color: #777;
  margin-top: 4px;
  max-width: 200px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Details = styled.div``;
