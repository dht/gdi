import styled from 'styled-components';

export const Wrapper = styled.div`
    display: table-row;

    &.selected {
        background-color: rgba(255, 255, 255, 0.07);
    }

    .id {
        max-width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;
