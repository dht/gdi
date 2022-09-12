import styled from 'styled-components';

export const Container = styled.div`
    min-width: 200px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h4`
    padding: 0 0 2px;
    margin: 0 0 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Option = styled.button`
    display: block;
    background-color: transparent;
    color: #dde;
    border: none;
    outline: none;
    padding: 0;
    margin:5px; 0;
`;
