import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    height: 140px;
    align-items: flex-start;
    border-top: 1px solid #dfdfdf;
`;

export const Title = styled.a`
    font-size: 19px;
    line-height: 26px;
    font-weight: 500;
    cursor: pointer;
    font-variation-settings: 'wdth' 80, 'wght' 650;
    color: #333;
    display: block;
    margin-bottom: 6px;

    &:hover {
        color: #d2126b;
    }
`;

export const Image = styled.a`
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: block;
    cursor: pointer;
    width: 222px;
    height: 125px;
    background-color: #333;

    &:hover {
        color: #d2126b;
    }
`;

export const Description = styled.div`
    flex: 1;
    padding: 15px 16px;
`;

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    margin-top: 4px;
    color: #889;
    font-variation-settings: 'wdth' 75, 'wght' 450;
`;

export const AuthorName = styled.div`
    color: #d2126b;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
        color: #970a4c;
    }
`;
