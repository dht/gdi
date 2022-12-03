import styled from 'styled-components';
import { Grid } from '@gdi/engine';

export const Wrapper = styled.div<{ width?: number }>`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Top = styled.div`
    height: 40vh;
    display: flex;
    position: relative;
    display: flex;
`;

export const Center = styled.div<{ color?: string }>`
    background-color: ${(props) => props.color || 'white'};
`;

export const Container = styled(Grid.Container)<{
    orientation?: 'row' | 'column';
    align?: 'center' | 'flex-start' | 'flex-end';
    flex?: number;
}>`
    width: 1200px;
    display: flex;
    margin: 0 auto;
    flex-direction: ${(props) => props.orientation || 'row'};
    ${(props) => props.flex && `flex: ${props.flex};`}
    flex-direction: ${(props) => props.orientation || 'row'};
    align-items: ${(props) => props.align || 'flex-start'};
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const Row = styled(Grid.Row)`
    border-color: 1px solid green;
`;

export const Column = styled(Grid.Column)<{ flex?: number }>`
    margin-top: 45px;
    padding-bottom: 50px;
    ${(props) => (props.flex ? `flex: ${props.flex}` : '')}

    &:nth-child(1) {
        flex: 3;
        padding-right: 80px;
        border-right: 2px solid #f1f1f1;
    }

    &:nth-child(2) {
        flex: 2;
        padding-left: 20px;
    }
`;
