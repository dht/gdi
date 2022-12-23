import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Parameter = styled.div`
    margin: 0 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ParameterName = styled.div`
    margin: 5px 0;
    color: #333;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1px 5px;
    border-radius: 5px;
    display: inline-block;

    span {
        flex: 1;
    }
`;

export const Visual = styled.div`
    flex: 1;
    margin: 3px 0;
    display: none;
`;

export const BottomLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #eee;
    padding: 3px;
    border: 1px solid #bbc;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #f3f3f3;
    }
`;

export const Icon = styled.button`
    border: none;
    color: #889;
    position: relative;
    top: 1px;

    i {
        font-size: 27px;
    }
`;

export const Value = styled.div`
    width: 40px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.02);
    font-size: 19px;
    font-weight: 500;
    color: #778;
    background-color: rgba(0, 0, 0, 0.1);
`;
