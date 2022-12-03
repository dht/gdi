import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    > div {
        ${(props) => props.theme.marginRight('5px')}
        margin-bottom: 5px;
    }
`;
