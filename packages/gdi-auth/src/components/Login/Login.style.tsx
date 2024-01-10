import styled from 'styled-components';
import { Button } from '@gdi/ui';

export const Wrapper = styled.div`
  width: 340px;
  padding: 40px 30px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
  box-shadow: 0 0 100px 5px rgba(255, 255, 255, 0.4);
  border: 1px solid #333;

  @media (max-width: 800px) {
    width: calc(100vw - 70px);
    padding: 30px 10px;
  }
`;

export const H1 = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const GoogleLogo = styled.img``;

export const Google = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  width: 288px;
  border: 1px solid #ccc;
  padding: 8px 30px;
  border-radius: 15px;

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }
`;

export const GoogleTitle = styled.div`
  margin-left: 10px;
  font-size: 17px;
  color: #334;
`;

export const Email = styled.input``;

export const Paragraph = styled.p`
  margin: 20px 0;
  font-size: 16px;
  color: #999;
  margin-bottom: 30px;
  line-height: 1.5;
`;

export const PasswordlessExplainer = styled.p``;

export const Or = styled.div`
  margin: 20px 0;
  font-size: 14px;
  position: relative;
  background-color: white;
  color: #999;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom: 1px solid #ccc;

  &::after {
    content: 'Or';
    font-size: 14px;
    background-color: white;
    padding: 2px 10px;
    position: absolute;
    transform: translateX(140px) translateY(-10px);
  }
`;

export const Terms = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #999;
  text-align: center;
  line-height: 1.3;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 18px;
  color: #334;
  box-sizing: border-box;
  outline: none;
  width: 288px;

  &:focus {
    border-color: #aaa;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const CtaEmail = styled(Button)`
  width: 268px;
  margin-top: 20px;
`;
