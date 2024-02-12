import styled from 'styled-components';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  flex: 1;
  max-width: 1150px;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px;
`;

export const Player = styled.div`
  width: 1150px;
  background-color: #000;
  height: 788px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Details = styled.div`
  font-size: 20px;
  padding: 10px 0;
`;

export const Title = styled.div`
  margin: 10px 0 0;
  font-size: 20px;
  font-weight: 700;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AuthorName = styled.div`
  font-size: 16px;
`;

export const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000;
  border-radius: 50%;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  background-color: white;
  background-size: 80%;
  background-repeat: no-repeat;
  box-shadow: inset 1px 1px 1px 0 rgba(0, 0, 0, 0.2), inset -1px -1px 1px 0 rgba(0, 0, 0, 0.2);
`;

export const TimeAgo = styled.div`
  font-size: 16px;
  color: #999;
`;

export const Actions = styled.div``;

export const Cta = styled(Button)``;

export const Description = styled.div`
  background-color: #eee;
  padding: 10px;
  font-size: 14px;
  line-height: 1.3;
  border-radius: 10px;

  .Markdown-wrapper {
    max-width: unset;
  }
`;
