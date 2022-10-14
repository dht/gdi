import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`;

export const ContainerItem = styled.div<{ selected?: boolean }>`
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
        border-color: ${(props) => (props.selected ? 'gold' : 'transparent')};
        outline: none;
        pointer-events: none;
    }
`;

export const ContainerNewItem = styled.div<{ selected?: boolean }>`
    position: relative;
    outline: none;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
        border-color: ${(props) => (props.selected ? 'gold' : 'transparent')};
        outline: none;
        pointer-events: none;
    }
`;
