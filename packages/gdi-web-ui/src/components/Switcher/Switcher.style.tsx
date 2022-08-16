import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 3px;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 999;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transform: scale(0.1);
    opacity: 0;
    transition: all 300ms cubic-bezier(0.47, 0.56, 0.04, 0.99);
    border: 5px solid gold;

    &.open {
        opacity: 1;
        transform: scale(1);
    }

    &.close {
        transform: scale(0);
    }

    .Input-container {
        padding: 10px;

        .ms-TextField-wrapper div {
            height: 50px;
        }

        input {
            font-size: 30px;
            color: #ddd;
        }
    }
`;

export const Top = styled.div`
    margin: 80px auto;
    min-width: 800px;
`;

export const Input = styled.input`
    font-size: 30px;
    padding: 10px;
`;

export const X = styled.div`
    position: absolute;
    top: 50px;
    right: 70px;
    font-size: 30px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    color: #99a;

    &:hover {
        color: gold;
    }

    &:active {
        transform: translateX(2px) translateY(2px);
    }
`;

export const Screens = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 100px;
`;

export const Screen = styled.div`
    width: 300px;
    height: 180px;
    border: 1px solid #112;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 10px;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    &.selected {
        border: 1px solid gold;
    }
`;

export const Title = styled.div`
    font-size: 20px;
`;

export const Description = styled.div`
    font-size: 15px;
    color: #889;
`;

export const RoutePath = styled.div`
    font-size: 11px;
    color: #778;
    position: absolute;
    bottom: 10px;
    left: 10px;
`;

export const AppName = styled.div`
    font-size: 12px;
    font-weight: bold;
    background-color: #000;
    color: pink;
    padding: 2px 6px;
    border-radius: 10px;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;
