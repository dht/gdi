import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    direction: ltr;

    input {
        background-color: rgb(31, 31, 47);
        color: #eee;
        border: 1px solid rgb(102, 102, 102);
        outline: none;
        padding: 7px 5px;
        border-radius: 2px;

        &:focus {
            border: 1px solid gold;
        }
    }

    @media (max-width: 768px) {
        zoom: 2;
    }
`;
