import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 3px 0;
    text-align: center;
`;

export const Label = styled.label``;

export const ImageWrapper = styled.div`
    height: 200px;
    width: 254px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    margin: auto;
    position: relative;
`;

export const File = styled.input`
    opacity: 0;
`;

export const Empty = styled.div`
    height: 200px;
    width: 254px;
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    i {
        font-size: 54px;
        opacity: 0.3;
    }
`;

export const Loader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const ImageData = styled.div`
    color: gold;
    font-family: monospace;
`;
