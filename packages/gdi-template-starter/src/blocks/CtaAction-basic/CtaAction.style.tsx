import styled, { css } from 'styled-components';
import { CtaActionColors } from './CtaAction';
import { darken } from 'polished';
import { BaseButton } from '../../components/Base.style';
import { mobile } from '../Base.style';

export const Container = styled.div<{ colors: CtaActionColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#112'};
    position: relative;
    height: 600px;
    padding: 100px 0 100px;
    box-sizing: border-box;
    display: flex;
    --bk-light: gold;
    font-family: ${(props) => props.theme.fontFamily};

    ${mobile(css`
        padding: 100px 50px;
    `)}

    &::before {
        background-image: url(https://static-b9ebe.web.app/ny2.webp);
        background-size: cover;
        background-position: top center;
        background-attachment: fixed;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: brightness(0.3) opacity(30%) blur(1px) contrast(110%);
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
    flex-direction: row;
    align-items: center;

    ${mobile(css`
        flex-direction: column;
    `)}
`;

export const H3 = styled.h3`
    font-size: 50px;
    font-variation-settings: 'wdth' 130, 'wght' 200;
    margin-right: 40px;
`;

export const Button = styled(BaseButton)`
    color: #333;
    font-weight: 600;
`;
