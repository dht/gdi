import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: #223;
    color: #fff;
    padding: 70px calc((100vw - 1200px) / 2);
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
`;

export const Wrapper = styled.div``;

export const Column = styled.div`
    flex: 1;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
`;

export const Li = styled.li`
    padding: 0 10px;
    margin: 0;
`;

export const A = styled.a`
    cursor: pointer;

    &:hover {
        color: gold;
        text-decoration: underline;
    }

    &:active {
        position: relative;
        bottom: 1px;
        left: 1px;
    }
`;
