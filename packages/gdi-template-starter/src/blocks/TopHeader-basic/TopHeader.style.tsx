import styled, { css } from 'styled-components';
import { TopHeaderColors } from './TopHeader';
import { darken } from 'polished';
import { mobile } from '../Base.style';

export const Container = styled.div`
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    height: 85px;
    top: 20px;

    &.inverted {
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 10px 5px 3px rgba(0, 0, 0, 0.1);
    }
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;
    padding: 10px 0;
    flex: 1;

    ${mobile(css`
        margin: 0 10px;
    `)}
`;

export const Flex = styled.div`
    flex: 1;
`;
