import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    padding: 20px;
`;

export const Table = styled.div`
    flex: 1;
`;

export const TableHeader = styled.div`
    flex: 1;
    height: 25px;
    display: flex;
    flex-direction: row;
    padding: 2px;
`;

export const TableRow = styled.div`
    flex: 1;
    height: 25px;
    display: flex;
    flex-direction: row;
    padding: 2px;
`;

export const Th = styled.div<{ flex?: number }>`
    margin: 2px;
    background-color: rgba(255, 255, 255, 0.05);
    flex: ${(props) => props?.flex || 1};
`;

export const Td = styled.div<{ flex?: number }>`
    margin: 2px;
    background-color: rgba(255, 255, 255, 0.03);
    flex: ${(props) => props?.flex || 1};
`;
