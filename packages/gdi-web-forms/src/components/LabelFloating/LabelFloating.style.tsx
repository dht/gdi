import styled from 'styled-components';
import { LabelSize } from '../../types';

export const Container = styled.div`
    flex: 1;
    position: relative;
`;

export const LabelValue = styled.label`
    font-size: 12px;
    color: #778;
    margin-bottom: 12px;
    display: block;

    @media (max-width: 768px) {
        font-size: 28px;
        margin-bottom: 15px;
    }
`;

export const LabelParagraph = styled.p`
    font-size: 16px;
    color: #ccc;
    line-height: 20px;
    display: block;
    padding: 0;
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 28px;
        line-height: 44px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    position: absolute;
    top: -9px;
    ${(props) => props.theme.left('5px')}
    background-color: rgb(31, 31, 47);
    height: 11px;
    padding: 0 3px;
    z-index: 1;
`;

export const Asterisk = styled.div`
    color: red;
    font-size: 18px;
    margin: 0 5px;
    line-height: 0px;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

export const Error = styled.div`
    color: red;
    font-size: 14px;
    margin: 0 5px;
    flex: 1;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
