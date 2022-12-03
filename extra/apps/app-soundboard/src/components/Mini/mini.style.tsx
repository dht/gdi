import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
    flex-wrap: wrap;
    justify-content: center;
    ${(props) => props.theme.padding('8px 5px 0 20px')}
`;
