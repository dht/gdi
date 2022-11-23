import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;

    &.grayscale {
        .icon {
            filter: grayscale(100%);
            transition: filter 0.3s ease-in-out;

            &:hover {
                filter: grayscale(0%);
            }
        }
    }
`;

export const Icon = styled.div``;
