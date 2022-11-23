import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    height: 300px;
    color: rgb(34, 2, 18);
    font-family: 'Encode Sans', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10%;
`;

export const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    &:nth-child(1) {
        align-items: flex-end;
        text-align: right;
    }

    &:nth-child(2) {
        align-items: flex-start;
        text-align: left;
    }
`;

export const Title = styled.a`
    font-size: 28px;
    font-variation-settings: 'wdth' 90, 'wght' 600;
    cursor: pointer;

    &:hover {
        color: #970a4c;
    }
`;

export const Author = styled.div`
    margin-top: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    font-variation-settings: 'wdth' 75, 'wght' 600;
    text-transform: uppercase;
`;

export const AuthorName = styled.div`
    margin-left: 5px;
    cursor: pointer;

    &:hover {
        color: #970a4c;
    }
`;

export const Slogan = styled.a`
    font-size: 40px;
    font-variation-settings: 'wdth' 75, 'wght' 700;
    line-height: 45px;
    font-style: italic;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color: #970a4c;
    }
`;
