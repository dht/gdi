import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    position: fixed;
    border-radius: 5px;
    top: 190px;
    ${(props) => props.theme.left('30px')}
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button``;
