import styled from 'styled-components';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div<{
    imageUrl?: string;
}>`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center center;
    position: relative;
    flex: 1;

    &&:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 39%,
            rgba(0, 0, 0, 0.5) 40%,
            rgba(0, 0, 0, 0.85) 49%,
            rgba(0, 0, 0, 0.95) 100%
        );

        ${mobile(css`
            display: none;
        `)}
    }
`;
