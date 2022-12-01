import styled, { css } from 'styled-components';
import { BaseButton } from '../../components/Base.style';
import { mobile } from '../Base.style';

export const Container = styled.div<{ imageUrl: string }>`
    flex: 1;
    background-color: #112;
    position: relative;
    padding: ${(props) => props.theme.vh(20)} 40px;
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
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mobile(css`
        margin: 0;
    `)}
`;

export const H3 = styled.h3`
    font-size: 50px;
    font-variation-settings: 'wdth' 130, 'wght' 200;

    ${mobile(css`
        font-size: 40px;
    `)}
`;

export const Button = styled(BaseButton)``;
