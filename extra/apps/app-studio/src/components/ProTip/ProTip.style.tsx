import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
`;

export const Box = styled.div`
    background-color: #2b2a4b;
    border-radius: 35px;
    box-shadow: 0 2px 15px 1px rgba(0, 0, 0, 0.5),
        inset 0 2px 4px 1px rgba(0, 0, 0, 0.09);
    padding: 26px;
    margin: 15px;
`;

export const Slogan = styled.div`
    color: yellow;
    font-family: cursive;
`;

export const Title = styled.div`
    color: white;
    font-size: 28px;
    margin-bottom: 10px;
`;

export const Paragraph = styled.div`
    opacity: 0.55;
    color: white;
    line-height: 22px;
    font-size: 17px;
`;

export const Button = styled.button`
    background-color: #d8d8d8;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 15px;
    text-transform: uppercase;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.02);
    margin: 10px 5px;
    width: 90%;
`;

export const OtherOptions = styled.div`
    opacity: 0.4;
    text-decoration: underline;
    ${(props) => props.theme.marginLeft('40px')}
`;
