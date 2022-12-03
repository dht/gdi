import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    margin: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Title = styled.div`
    font-size: 18px;
    flex: 1;

    &.selected {
        color: gold;
    }
`;
