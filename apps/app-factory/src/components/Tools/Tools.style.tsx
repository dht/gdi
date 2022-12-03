import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const KeyboardWrapper = styled.div`
    ${(props) => props.theme.marginLeft('30px')}
`;
