import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    font-size: 20px;
`;

export const KeyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

    &:nth-child(2n) {
        background-color: rgba(255, 255, 255, 0.03);
    }
`;

export const Combination = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 160px;
`;

export const Modifier = styled.div`
    color: gold;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 0;
`;

export const Plus = styled.div`
    color: white;
    font-size: 16px;
    padding: 0 2px;
`;

export const Key = styled.div``;

export const Description = styled.div``;
