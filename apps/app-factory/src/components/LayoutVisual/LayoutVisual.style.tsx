import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 6px;
`;

export const Id = styled.div`
    position: absolute;
    top: 30px;
    ${(props) => props.theme.right('30px')}
    font-size: 17px;
    font-weight: 500;
    color: #ffd9008b;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 5px 14px;
    box-shadow: inset -2px -2px 3px 3px rgba(0, 0, 0, 0.4);
    border-radius: 6px;
`;

export const CurrentResolution = styled(Id)`
    ${(props) => props.theme.right('100px')}
    color: palevioletred;
`;
