import styled from 'styled-components';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  flex: 1;
  cursor: pointer;

  &:hover {
    .content {
      background-color: #ddd;
    }

    .title {
      border-bottom: 2px solid palevioletred;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 285px;
  background-color: #eee;
  border-radius: 20px 0 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Cta = styled(Button)``;

export const Title = styled.span`
  font-weight: 60 0;
  font-weight: bold;
`;

export const Details = styled.div`
  padding: 15px 0;
`;

export const Description = styled.div`
  line-height: 1.2;
  color: #666;
  margin-top: 5px;

  // max three rows ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Subtitle = styled.div`
  color: #aaa;
  margin-top: 10px;
`;
