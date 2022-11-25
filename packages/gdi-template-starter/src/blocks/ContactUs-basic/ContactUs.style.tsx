import styled from 'styled-components';
import { BaseButton } from '../../components/Base.style';

export const Container = styled.div<{ imageUrl: string }>`
    flex: 1;
    background-color: #112;
    position: relative;
    height: 600px;
    padding: 20px 0 100px;
    box-sizing: border-box;
    display: flex;
    --bk-light: #112;
    font-family: ${(props) => props.theme.fontFamily};

    &::before {
        background-image: url(${(props) => props.imageUrl});
        background-size: cover;
        background-position: bottom center;
        background-attachment: fixed;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: ;
        filter: brightness(0.3) opacity(25%) blur(1px) contrast(110%);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const H3 = styled.h3`
    font-size: 50px;
    font-variation-settings: 'wdth' 130, 'wght' 200;
`;

export const Button = styled(BaseButton)``;
