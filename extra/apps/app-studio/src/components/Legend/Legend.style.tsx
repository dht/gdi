import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
`;

export const Rectangle = styled.div<{ color: string }>`
    width: 18px;
    height: 18px;
    background-color: ${(props) => props.color};
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    position: relative;

    &:after {
        content: ' ';
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0, 0, 0, 0.2) 10px,
            rgba(0, 0, 0, 0.2) 21px
        );
        background-size: 30px 30px;
    }
`;

export const Title = styled.div`
    margin-left: 12px;
    color: gold;
    font-size: 18px;
    text-shadow: 0 0 3px white;
`;
