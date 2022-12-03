import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(29, 1fr);
    grid-template-rows: repeat(29, 1fr);
`;

export const Panel = styled.div`
    flex: 1;
    display: flex;
    box-shadow: inset 0 0 1px 5px rgba(0, 0, 0, 0.2);

    &:nth-child(1) {
        grid-area: 1 / 1 / 18 / 20;
    }

    &:nth-child(2) {
        grid-area: 1 / 20 / 6 / 30;
    }

    &:nth-child(3) {
        grid-area: 18 / 1 / 30 / 20;
    }
    &:nth-child(4) {
        grid-area: 6 / 20 / 30 / 30;
    }
`;
