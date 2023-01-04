import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 600px;
    flex-wrap: wrap;
    margin-top: 50px;
`;

export const WrapperCard = styled.div`
    margin: 5px 5px 15px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    filter: grayscale(0%) opacity(1);
    transition: all 0.1s ease-in-out;

    &.grayscale {
        filter: grayscale(100%) opacity(0.5);
        transition: all 0.3s ease-in-out;

        .v {
            opacity: 0;
        }
    }
`;

export const Header = styled.div``;

export const Title = styled.div`
    font-size: 20px;
    width: 120px;
    text-align: center;
    margin-top: 10px;
`;

export const Image = styled.div`
    zoom: 1.5;
    background-color: white;
    width: 50px;
    border-radius: 50%;
    height: 50px;
    pointer-events: none;
`;

export const V = styled.div`
    position: absolute;
    top: -5px;
    right: 10px;
    font-size: 30px;
    color: yellowgreen;
    opacity: 1;
`;
