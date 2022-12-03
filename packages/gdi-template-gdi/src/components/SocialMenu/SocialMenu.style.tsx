import styled from 'styled-components';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 15px;
    cursor: pointer;
    color: palevioletred;

    &:hover {
        color: #ce527b;
    }

    &:active {
        position: relative;
        top: 1px;
        left: 1px;
    }
`;

export const Button = styled.a``;
