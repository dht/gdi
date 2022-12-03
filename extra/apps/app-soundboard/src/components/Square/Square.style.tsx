import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    height: 130px;
    position: relative;
    background-color: darken(#171722, 3%);
    ${(props) => props.theme.borderLeft('2px solid #333')}
    border-bottom: 2px solid #333;

    &.darker {
        background-color: darken(#171722, 3%);
        ${(props) => props.theme.borderLeft('2px solid #000')}
    }
`;

export const Title = styled.div`
    position: absolute;
    top: 5px;
    ${(props) => props.theme.right('10px')}
    font-weight: bold;
    font-size: 16px;
    opacity: 0.2;

    &.current {
        opacity: 1;
        color: goldenrod;
        font-weight: normal;
    }
`;

export const Date = styled.div`
    position: absolute;
    top: 5px;
    ${(props) => props.theme.left('3px')}
    font-size: 16px;
    opacity: 0.2;

    &.current {
        opacity: 1;
        color: goldenrod;
    }
`;

export const BucketWrapper = styled.div`
    position: absolute;
    top: 0;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}    
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
