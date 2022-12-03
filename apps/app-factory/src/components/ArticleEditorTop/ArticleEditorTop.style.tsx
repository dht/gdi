import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    color: #000;
`;

export const Title = styled.h1`
    margin-top: 12px;
    font-size: 40px;
    line-height: 50px;
    font-weight: 500;
    font-variation-settings: 'wdth' 100, 'wght' 580;
    display: block;
    margin-bottom: 6px;
    ${(props) => props.theme.paddingRight('50px')}
`;

export const Intro = styled.div`
    font-size: 20px;
    font-style: italic;
    line-height: 30px;
    font-weight: 500;
    font-variation-settings: 'wdth' 100, 'wght' 500;
    display: block;
    margin-bottom: 6px;
    color: #696969;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    margin-top: 4px;
    color: #696969;
    font-variation-settings: 'wdth' 75, 'wght' 450;
`;

export const AuthorName = styled.div`
    color: #d2126b;
    ${(props) => props.theme.marginLeft('5px')}
    cursor: pointer;

    &:hover {
        color: #970a4c;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Column = styled.div`
    &:nth-child(1) {
        flex: 1;
    }

    &:nth-child(2) {
        width: 300px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
`;

export const ImageDescription = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    margin-top: 4px;
    color: #696969;
    font-variation-settings: 'wdth' 75, 'wght' 450;
    border-bottom: 1px solid #ddd;
    padding: 5px 0 9px;
`;

export const Gap = styled.div`
    height: 120px;
    border-bottom: 1px solid #ddd;
`;

export const DateText = styled.div``;

export const Separator = styled.div`
    margin: 0 5px;
`;

export const ImageSource = styled.div`
    opacity: 0.9;
`;

export const ContainerBreadcrumbs = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const Breadcrumb = styled.a`
    color: #c13b68;
    padding: 5px 10px;
    ${(props) => props.theme.borderRight('1.5px solid #c13b68')}
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const Line = styled.div`
    ${(props) => props.theme.borderRight('1.5px solid #c13b68')}
    transform: rotate(-15deg) translateY(2px);
    height: 21px;
    width: 1px;
`;

export const ContainerShare = styled.div`
    margin: 10px 0;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
