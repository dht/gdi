import styled, { css } from 'styled-components';
import { TopHeaderColors } from './TopHeader';
import { darken } from 'polished';
import { mobile } from '../Base.style';

export const Container = styled.div<{
    colors: TopHeaderColors;
    position: string;
}>`
    display: flex;
    position: ${(props) => props.position};
    top: ${(props) => (props.position === 'absolute' ? '10px' : 0)};
    z-index: 2;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}
    min-height: 100px;
    transition: all 150ms ease-out;
    display: none;
    background-color: ${(props) => props.colors.background ?? 'transparent'};
    font-family: ${(props) => props.theme.fontFamily};

    ${mobile(css`
        height: auto;
        max-height: none;
        padding: 80px 20px;
    `)}

    &.inverted {
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 10px 5px 3px rgba(0, 0, 0, 0.1);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 50px;
    padding: 10px 0;
    flex: 1;

    ${mobile(css`
        flex-direction: column;
    `)}
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    ${mobile(css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    `)}
`;
