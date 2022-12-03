import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    flex: 1;
`;

export const Header = styled.div`
    padding: 25px 25px 15px;
`;

export const Title = styled.div`
    width: 90px;
    color: palevioletred;
`;

export const Details = styled.div`
    flex: 1;
    ${(props) => props.theme.marginRight('8px')}
`;

export const Scope = styled.div`
    font-size: 13px;
    color: goldenrod;
    margin-top: -3px;
`;

export const Summary = styled.div`
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${(props) => props.theme.marginRight('8px')}
    max-width: 565px;
    font-size: 16px;
    color: #ccd;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
