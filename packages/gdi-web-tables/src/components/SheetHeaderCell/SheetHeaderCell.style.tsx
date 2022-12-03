import styled from 'styled-components';

export const Wrapper = styled.div`
    display: table-cell;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid #445;
    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.1);
    padding: 3px;
    cursor: pointer;
    user-select: none;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    i {
    }
`;

export const Title = styled.div`
    ${(props) => props.theme.marginRight('5px')}
`;
