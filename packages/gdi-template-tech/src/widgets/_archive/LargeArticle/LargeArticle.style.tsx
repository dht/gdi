import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: black;
    align-items: flex-start;
    border-top: 1px solid #dfdfdf;
    width: 100%;
    margin-bottom: 10px;

    &.horizontal {
        flex-direction: row;

        .description {
            min-width: 250px;
        }

        .slogan {
            font-size: 17px;
            line-height: 22px;
        }
    }
`;

export const Title = styled.a`
    font-size: 28px;
    line-height: 35px;
    font-weight: 500;
    cursor: pointer;
    font-variation-settings: 'wdth' 75, 'wght' 650;
    color: white;
    display: block;
    margin-bottom: 6px;
    text-transform: uppercase;

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
    width: 100%;
    height: 500px;
    background-color: #333;

    &:hover {
        color: #d2126b;
    }
`;

export const Description = styled.div`
    flex: 1;
    padding: 25px 14px;
`;

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    margin-top: 4px;
    color: #eef;
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

export const Slogan = styled.div`
    font-size: 16px;
    margin-bottom: 8px;
`;
