import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Parameter = styled.div`
    margin: 5px 0;
`;

export const ParameterName = styled.div`
    margin: 5px 0;
`;

export const Icon = styled.button`
    ${(props) => props.theme.marginLeft('10px')}
    background-color: #223;
    color: #556;
    border: none;
    border-radius: 5px;
    padding: 3px 4px;
    cursor: pointer;
    color: #889;

    i {
        font-size: 13px;
    }

    &:hover {
        color: palevioletred;
    }

    &:active {
        position: relative;
        bottom: 1px;
        ${(props) => props.theme.left('1px')}
    }
`;
