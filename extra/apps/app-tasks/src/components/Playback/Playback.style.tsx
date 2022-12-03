import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${(props) => props.theme.marginRight('10px')}

    .icon {
        zoom: 2.4;
        color: #99a;
    }
`;

export const Empty = styled.div`
    color: #556;
    font-size: 23px;
    flex: 1;
    text-align: center;
`;
