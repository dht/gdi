import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .TableRowActions-container {
        opacity: 0;
        pointer-events: none;
    }

    &.selected {
        background-color: rgba(255, 255, 255, 0.1);
    }

    &:hover {
        .TableRowActions-container {
            opacity: 1;
            pointer-events: all;
        }
    }
`;
