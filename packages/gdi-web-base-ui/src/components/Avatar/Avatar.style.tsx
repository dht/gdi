import styled from 'styled-components';

export const Container = styled.div<{ size: number; color: string }>`
    flex: 1;
    background-color: ${(props) => props.color};
    width: ${(props) => props.size + 'px'};
    height: ${(props) => props.size + 'px'};
    line-height: ${(props) => props.size + 'px'};
    border-radius: ${(props) => props.size + 'px'};
    border: 2px solid #aaa;
    text-align: center;
    cursor: pointer;
    position: relative;
    background-size: cover;

    &:hover {
        &:after {
            content: '';
            position: absolute;
            ${(props) => props.theme.left(0)}
            ${(props) => props.theme.right(0)}
            top: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: ${(props) => props.size + 'px'};
        }
    }
`;
