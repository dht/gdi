import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
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

export const Container = styled(Grid.Container)`
    height: 100px;

    ${mobile(css`
        height: auto;
        margin: 0 10px;
    `)}
`;

export const Row = styled(Grid.Row)``;

export const Flex = styled.div`
    flex: 1;
`;
