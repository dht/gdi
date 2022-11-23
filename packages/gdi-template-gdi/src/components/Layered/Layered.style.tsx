import styled from 'styled-components';

export const Container = styled.div<{ height: number }>`
    flex: 1;
    position: relative;
`;

export const Background = styled.div<{ height: number }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${(props) => props.height + 'px'};
`;

export const Content = styled.div<{ height: number }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${(props) => props.height + 'px'};
    display: flex;
`;
