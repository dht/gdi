import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    z-index: 2;
`;

export const Bar = styled.div`
    background-color: #223;
    box-shadow: 0 0 3px 7px rgba(0, 0, 0, 0.15);
    color: #eee;
    margin-top: 100px;
    height: 80px;
    width: 1000px;
    padding: 10px;
    display: flex;
    position: relative;
`;
