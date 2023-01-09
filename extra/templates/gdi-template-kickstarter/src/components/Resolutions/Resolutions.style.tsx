import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    grid-template-columns: repeat(auto-fill, 25px);
    grid-template-rows: repeat(auto-fill, 25px);
    background-size: 25px 25px;
    --grid: rgba(255, 255, 255, 0.05);
    background-size: 25px 25px;
    background-image: linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    display: grid;
    min-height: 100vh;
`;

export const Resolution = styled.div`
    position: relative;
`;

export const IFrame = styled.iframe`
    float: left;
    border: none;
`;

export const Label = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 3px 3px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
`;
