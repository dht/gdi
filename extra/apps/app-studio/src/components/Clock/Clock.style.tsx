import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${(props) => props.theme.marginLeft('20px')}
`;

export const Today = styled.div`
    ${(props) => props.theme.marginRight('18px')}
    font-size: 20px;
    color: #aaa;
`;
