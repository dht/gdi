import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 50px;
`;

export const ContainerStat = styled.div`
    padding: 10px 30px;
    height: 100px;
    background-color: #223;
    opacity: 0.96;
    width: 300px;
    border-radius: 34px;
    margin: 12px 15px;
    ${(props) => props.theme.floatLeft()}
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    @media (max-width: 1340px) {
        zoom: 0.7;
    }

    &:hover {
        background-color: #112;
    }

    &:active {
        position: relative;
        bottom: 1px;
        ${(props) => props.theme.left('1px')}
    }
`;

export const Column = styled.div`
    &:nth-child(1) {
        flex: 3;
        ${(props) => props.theme.paddingRight('20px')}
    }
    &:nth-child(2) {
        flex: 2;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    font-variation-settings: 'wdth' 100, 'wght' 400;
    color: #fff;
    margin-bottom: 8px;
    text-align: center;
`;

export const GraphWrapper = styled.div`
    height: 70px;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 1px 5px rgba(0, 0, 0, 0.2);
    display: flex;
`;

export const Value = styled.div`
    color: white;
    font-size: 30px;
    font-variation-settings: 'wdth' 105, 'wght' 350;
    padding: 5px 8px;
    margin-top: 5px;
    box-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    text-align: center;
    margin: 0;
    user-select: none;

    &:hover {
        color: gold;
        background-color: #c71b54;
    }

    &:active {
        position: relative;
        bottom: 2px;
        ${(props) => props.theme.left('2px')}
    }
`;
