import styled from 'styled-components';

export const Wrapper = styled.div<{ percent: number }>`
    width: 100px;
    height: 20px;

    position: relative;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        height: 20px;
        width: ${(props) => 100 - props.percent}%;
        background-color: white;
    }
`;
