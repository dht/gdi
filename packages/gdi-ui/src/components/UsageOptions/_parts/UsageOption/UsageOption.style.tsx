import styled from 'styled-components';
import Button from '../../../Button/Button';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin: 5px;
  border: 3px solid #ccd;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border-color: palevioletred;

    .title,
    .icon {
    }
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 15px;
  letter-spacing: -0.5px;
`;

export const Description = styled.div`
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.3;
`;

export const Cta = styled(Button)``;
