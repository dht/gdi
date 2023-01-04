import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Column = styled.div`
    flex: 1;

    &:first-child {
        max-width: 200px;
    }
`;

export const Users = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    display: table;
    width: 800px;
`;

export const UserRow = styled.div`
    display: table-row;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const UserField = styled.div<{ color?: string }>`
    display: table-cell;
    padding: 5px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    vertical-align: middle;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: ${(props) => props.color ?? '#ccd'};
`;

export const H2 = styled.h2`
    color: #ccd;
    font-variation-settings: 'wdth' 100, 'wght' 500;
`;

export const Info = styled.div`
    margin-left: -10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 100px 0;
    flex: 1;
`;
