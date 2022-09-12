import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    > div {
        margin-right: 5px;
        margin-bottom: 5px;
    }
`;
