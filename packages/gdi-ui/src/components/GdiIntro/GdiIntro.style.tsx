import styled from 'styled-components';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 24rem;
  max-width: 785rem;
  padding: 0 10rem;

  @media (max-width: 800px) {
    padding: 0;
    max-width: 85vw;
    z-index: 999;
  }
`;

export const Image = styled.div`
  height: 400px;
  width: 785rem;
  display: flex;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Details = styled.div`
  padding: 20rem;
`;

export const BoardId = styled.div`
  font-size: 15rem;
  color: #999;
  padding: 0 0 5rem;
`;
export const Name = styled.h2`
  font-size: 23rem;
  padding: 0;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 20rem;
  padding: 0;
  margin: 10rem 0;
  line-height: 1.5;
  max-height: 200px;
  overflow: auto;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10rem 0;
`;

export const Label = styled.label`
  font-size: 15rem;
  color: #999;
  display: block;
  width: 80rem;
`;

export const Content = styled.div`
  font-size: 17rem;
`;

export const Actions = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Notes = styled.div`
  font-size: 15rem;
  color: #999;
  line-height: 1.5;
  flex: 1;

  span {
    background-color: gold;
    padding: 2rem 6rem;
    color: #333;

    &.pink {
      background-color: pink;
    }
  }
`;

export const Cta = styled(Button)`
  padding: 5rem 20rem 5rem 10rem;
  display: flex;
  font-size: 17px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;
