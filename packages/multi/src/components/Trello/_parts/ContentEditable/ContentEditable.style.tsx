import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    outline: none;

    &[contenteditable='true']:empty:not(:focus):before {
        content: attr(data-ph);
        color: grey;
        font-style: italic;
    }
`;
