import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  background-color: #111;
  background-image: url(https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/4d/ac/20/4dac200b-77b7-9379-71d1-65500c30b430/AppIcon.lsr/460x0w.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 15px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Subtitle = styled.div`
  font-size: 15px;
  color: #aaa;
  margin-bottom: 10px;
`;

export const Author = styled.div`
  font-size: 15px;
  color: #aaa;

  span {
    color: pink;
  }
`;

export const Cta = styled.button`
  background-color: #223;
  color: #eef;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  box-shadow:
    0 0 10px rgba(0, 0, 0, 0.2),
    inset 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-size: 17px;
  margin-top: 10px;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #334;
  }

  &:active {
    bottom: 1px;
    left: 1px;
    position: relative;
  }
`;

export const Price = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  border-radius: 15px;
  font-size: 20px;
`;

export const Description = styled.div`
  margin-top: 20px;
  font-size: 15px;
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  margin-bottom: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Details = styled.div`
  margin-left: 20px;
`;
