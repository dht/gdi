import styled from 'styled-components';
import { MyNumbersColors } from './MyNumbers';
import { darken } from 'polished';

export const Container = styled.div<{ colors: MyNumbersColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#223'};
    display: flex;
    padding: 100px 0;
    font-family: ${(props) => props.theme.fontFamily};

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Numbers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Number = styled.div`
    width: 300px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-radius: 6px;
`;

export const IconWrapper = styled.div`
    width: 100px;
    height: 70px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
        font-size: 44px;
    }
`;

export const Title = styled.div`
    font-size: 24px;
    padding: 0;
    margin: 0 0 20px;
`;

export const Value = styled.div`
    font-size: 44px;
    padding: 0;
    margin: 0 0 10px;
`;
