import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    margin: 20px 0;

    @media (max-width: 768px) {
        margin: 50px 0;
    }
`;

export const PaddingTop = styled.div`
    padding-top: 15px;
    ${(props) => props.theme.paddingLeft('10px')}
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
