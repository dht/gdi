import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: #223;
    padding-bottom: 75px;
`;

export const H2 = styled.h2`
    font-size: 40px;
    padding: 0;
    margin: 0;
    margin-bottom: 50px;
`;

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
`;

export const Overlay = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    border-right: 1px solid rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const Description = styled.div`
    text-align: center;
    margin-top: 10px;
    line-height: 1.3;
    color: rgba(255, 255, 255, 0.5);
`;

export const Tag = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 3px 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    font-variation-settings: 'wdth' 100, 'wght' 500;

    &.V1 {
        background-color: yellowgreen;
        color: #333;
    }

    &.Draft {
        background-color: purple;
    }

    &.Beta {
        background-color: orange;
        color: #333;
    }
`;
