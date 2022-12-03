import styled from 'styled-components';
import { css, mobile } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;

    ${mobile(css`
        display: none;
    `)}
`;

export const Link = styled.a`
    color: #334;
    font-size: 16px;
    font-weight: 500;
    margin: 0 20px;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    display: block;
    position: relative;

    &::before {
        content: '[';
        position: absolute;
        left: -5px;
        transition: all 0.2s ease-in-out;
        opacity: 0;
    }

    &::after {
        content: ']';
        position: absolute;
        right: -5px;
        transition: all 0.2s ease-in-out;
        opacity: 0;
    }

    &:hover {
        &::before {
            left: -12px;
            opacity: 1;
        }

        &::after {
            right: -12px;
            opacity: 1;
        }
    }

    &.selected {
        &::before {
            left: -10px;
            opacity: 1;
        }

        &::after {
            right: -10px;
            opacity: 1;
        }
    }
`;
