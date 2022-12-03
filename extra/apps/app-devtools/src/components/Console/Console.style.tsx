import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    width: 500px;
    height: 700px;
`;

export const Log = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &:nth-child(2n + 1) {
        background-color: rgba(255, 255, 255, 0.03);
    }
`;

export const Index = styled.div`
    color: gold;
    padding: 10px;
    width: 30px;
    font-size: 11px;
    text-align: center;
`;

export const TimeStamp = styled.div`
    padding: 10px;
    color: cyan;
`;

export const Value = styled.div`
    flex: 1;
`;

export const Arg = styled.span`
    padding: 0 2px;
    &.boolean {
        color: cyan;
    }

    &.number {
        color: brown;
    }

    &.object {
        color: orange;
    }
`;
