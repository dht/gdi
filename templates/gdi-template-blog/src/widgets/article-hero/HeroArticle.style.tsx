import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: #000;
    margin: 1px;
    flex-shrink: 1;
    flex-grow: 1;
    display: flex;
    align-items: stretch;
    font-variation-settings: 'wdth' 32, 'wght' 350;

    .Decoration-container {
        display: none;
    }

    &.small {
        flex-direction: column;

        .image {
            min-height: 220px;
        }

        .description {
            line-height: 22px;
        }
    }

    &.medium {
        flex-direction: column;

        .image {
            min-height: 240px;
        }

        .author {
            margin-top: 8px;
        }
    }

    &.large {
        flex-direction: row;

        .image {
            width: 50%;
        }

        .description {
            margin: 8px 18px;
            line-height: 40px;
        }

        .title {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 55px;
            line-height: 50px;
            font-family: 'Saira';
            font-variation-settings: 'wdth' 58, 'wght' 800;
        }

        .Decoration-container {
            display: block;
        }
    }
`;

export const Title = styled.a`
    font-size: 23px;
    font-weight: 500;
    cursor: pointer;
    color: white;
    font-variation-settings: 'wdth' 80, 'wght' 650;

    &:hover {
        color: #d2126b;
    }
`;

export const Image = styled.a`
    flex: 1;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: block;
    cursor: pointer;
    position: relative;

    &:hover {
        color: #d2126b;
    }
`;

export const Description = styled.div`
    flex: 1;
    padding: 20px;
`;

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    margin-top: 4px;
    text-transform: uppercase;
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
