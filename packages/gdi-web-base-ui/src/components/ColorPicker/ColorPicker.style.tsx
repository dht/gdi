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
    top: 20px;
    right: 20px;
    z-index: 999;
    width: 290px;
`;
