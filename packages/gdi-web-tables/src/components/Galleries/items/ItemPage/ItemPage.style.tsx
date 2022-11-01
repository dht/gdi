import styled from 'styled-components';

export const Description = styled.div`
    flex: 1;
    padding: 20px;
`;

export const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}
    font-size: 80px;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 10px 2px rgba(255, 255, 255, 0.1);
`;
