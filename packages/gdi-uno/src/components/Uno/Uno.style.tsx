import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    font-family: ${(props) => props.theme.fontFamily};

    &.palette-0 {
        --main-color: green;
    }

    &.palette-6 {
        --main-color: #810f7c;
    }
`;

export const Content = styled.div``;

export const BreadcrumbsWrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 50px 0 40px;
`;
