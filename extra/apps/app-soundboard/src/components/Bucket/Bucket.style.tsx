import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-top: none;
    box-shadow: inset 3px -3px 3px rgba(0, 0, 0, 0.1),
        inset -3px -3px 3px rgba(0, 0, 0, 0.1);
    width: 60px;
    height: 70px;
    position: relative;
    border-radius: 0 0 5px 5px;
    cursor: pointer;

    &:hover {
        border: 1px solid goldenrod;
        border-top: none;
    }
`;

export const Inner = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    overflow: hidden;
    border-radius: 0 0 5px 5px;
`;

export const First = styled.div`
    background-color: #334;
`;

export const Second = styled.div`
    background-color: #445;
    background-image: linear-gradient(to bottom right, red, yellow);
`;

export const Third = styled.div`
    border-top: 1px dashed #888;
    position: absolute;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}
    bottom: 0;
`;

export const PercentWrapper = styled.div`
    position: absolute;
    top: -25px;
    ${(props) => props.theme.left('-30px')}
`;

export const DurationWrapper = styled.div`
    position: absolute;
    bottom: -30px;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}
    font-size: 18px;
    text-align: center;
    opacity: 0.6;
`;
