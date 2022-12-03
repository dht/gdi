import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Pair = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 10px;

    &:nth-child(2n + 1) {
        background-color: rgba(255, 255, 255, 0.05);
    }
`;

export const Key = styled.div`
    color: #aaa;
    font-size: 18px;
`;

export const Value = styled.div`
    color: gold;
    font-size: 16px;
`;

export const Pre = styled.pre``;
