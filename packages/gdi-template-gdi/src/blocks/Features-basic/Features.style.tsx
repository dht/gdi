import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    height: 800px;
    padding-top: 70px;
    background-color: white;
`;

export const H2 = styled.h2`
    font-size: 40px;
    padding: 0;
    margin: 0 0 20px;

    span {
        color: goldenrod;
        font-size: 22px;
    }
`;

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    color: #333;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const Column = styled.div`
    flex: 1;
`;

export const H3 = styled.h3`
    font-size: 28px;
`;

export const Ul = styled.ul`
    font-size: 24px;
    line-height: 32px;
`;

export const Li = styled.li`
    span {
        margin-left: 10px;
        color: goldenrod;
        font-size: 18px;
    }
`;
