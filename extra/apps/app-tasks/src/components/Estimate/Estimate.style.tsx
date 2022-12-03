import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    position: relative;

    i {
        cursor: pointer;
        position: relative;
        color: #dde;

        &:hover {
            color: gold;
        }

        &:active {
            bottom: 1px;
            ${(props) => props.theme.left('1px')}
        }
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
`;

export const Option = styled.div`
    width: 65px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: inset 3px 3px 2px 1px rgba(0, 0, 0, 0.1);
    margin: 3px;
    cursor: pointer;
    font-size: 17px;

    &:hover {
        background-color: goldenrod;
        color: #333;
        font-weight: bold;
    }
`;
