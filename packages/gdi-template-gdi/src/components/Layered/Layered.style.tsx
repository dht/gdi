import styled from 'styled-components';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div<{ height: number }>`
    flex: 1;
    position: relative;
`;

export const Background = styled.div<{ height: number }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${(props) => props.height + 'px'};
    overflow-x: hidden;

    ${mobile(css`
        max-width: 100vw;
        transform: rotate(0) !important;
        left: 0 !important;
        right: 0 !important;
    `)}
`;

export const Content = styled.div<{ height: number }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${(props) => props.height + 'px'};
    display: flex;
`;
