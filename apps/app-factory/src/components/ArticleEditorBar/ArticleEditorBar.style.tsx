import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    background-color: white;
`;

export const Inner = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const A = styled.button`
    color: #889;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: palevioletred;
    }

    &:before {
        content: '< ';
    }
`;

export const Meta = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    color: #778;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    position: relative;
    padding: 0 15px;

    &:after {
        content: '';
        ${(props) => props.theme.borderLeft('1px solid #899')}
        height: 30px;
        position: absolute;
        ${(props) => props.theme.right(0)}
    }

    &:last-child {
        &:after {
            display: none;
        }
    }
`;

export const Value = styled.div`
    padding-top: 2px;
    font-size: 14px;
    font-weight: 500;
`;
