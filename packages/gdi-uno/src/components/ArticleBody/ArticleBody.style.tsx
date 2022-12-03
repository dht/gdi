import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    background-color: white;
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

export const P = styled.p`
    font-size: 18px;
    line-height: 26px;
    color: #333;
`;

export const Quote = styled.div`
    font-size: 27px;
    max-width: 340px;
    float: right;
    line-height: 35px;
    padding: 20px 30px;
    color: #d2126b;
    text-transform: uppercase;
    font-variation-settings: 'wdth' 75, 'wght' 650;
`;
