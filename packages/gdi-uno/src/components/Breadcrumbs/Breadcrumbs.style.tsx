import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Breadcrumb = styled.a`
    &&:after {
        content: '>';
        padding: 0 5px;
    }

    &:last-child {
        &&:after {
            display: none;
        }
    }
`;

export const Divider = styled.div``;
