import styled from 'styled-components';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    border: 3px solid rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
    background-color: #fffaf1;
    font-size: 24px;
    max-width: 500px;
    border-radius: 3px;
    color: #333;
    margin: 0 0 30px;
    padding: 6px 8px;
    height: 48px;
    outline: none;

    ${mobile(css`
        max-width: 300px;
        margin: 50px auto;
    `)}
`;

export const Typewriter = styled.div<{ length: number }>`
    overflow: hidden;
    border-right: 0.15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    font-family: monospace;
    letter-spacing: 0.08em;
    animation: typing ${(props) => props.length * 50}ms
            steps(${(props) => props.length}, end),
        blink-caret 1.2s step-end infinite;
    display: inline-block;

    ${mobile(css`
        font-size: 18px;
    `)}

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        38% {
            border-color: orange;
        }
    }
`;

export const Inner = styled.div`
    float: left;
`;
