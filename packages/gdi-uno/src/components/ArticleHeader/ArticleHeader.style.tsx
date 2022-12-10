import styled from 'styled-components';
import { Grid } from '@gdi/engine';

export const Container = styled(Grid.Container)``;

export const Wrapper = styled.div`
    flex: 1;
    background-color: white;
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 0;
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
    padding-right: 50px;
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
    margin-left: 5px;
    cursor: pointer;

    &:hover {
        color: #970a4c;
    }
`;

export const Row = styled(Grid.Row)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Column = styled(Grid.Column)`
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
