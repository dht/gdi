import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    height: 40px;
    padding: 5px 0;
    position: absolute;
    z-index: 9;
    top: 20px;
    left: 0;
    right: 0;
`;

export const Container = styled(Grid.Container)``;

export const Row = styled(Grid.Row)`
    align-items: center;
`;

export const Flex = styled.div`
    flex: 1;
`;
