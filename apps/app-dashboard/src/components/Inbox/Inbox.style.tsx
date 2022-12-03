import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    color: white;
    opacity: 0.96;

    @media (max-width: 1340px) {
        max-height: 1000px;
    }

    .TopBar-wrapper {
        color: #334;

        span {
            color: #334;
        }
    }
`;
