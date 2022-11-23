import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: #222233f7;
    height: 100%;
    --grid: rgba(255, 255, 255, 0.05);
    background-size: 25px 25px;
    background-image: linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);

    display: flex;

    flex-direction: column;
`;

export const Flex = styled.div`
    flex: 1;
`;
