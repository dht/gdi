import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    background-color: #223;
    --grid: rgba(255, 255, 255, 0.05);
    background-image: linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 25px 25px;
    opacity: 1;
    color: #556;
`;

export const H1 = styled.h1`
    font-size: 34px;
    font-weight: 800;
`;

export const I = styled.i`
    font-size: 80px;
`;
