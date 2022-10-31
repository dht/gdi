import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const Rect = styled.div<{ size: number }>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 5px;
    border: 1px solid #445;
`;

export const PickerWrapper = styled.div`
    position: absolute;
    top: 40px;
    ${(props) => props.theme.right(0)}
    z-index: 999;
    width: 290px;
    background-color: rgba(40, 40, 60, 0.95);
    border-radius: 10px;
    border: 2px solid #445;
`;
