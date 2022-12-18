import styled from 'styled-components';

export const Wrapper = styled.div<{ color?: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;

    .tag {
        color: ${(props) => props.color ?? 'brown'};
    }
`;

export const Tag = styled.div`
    margin-right: 8px;

    &::before {
        content: '#';
    }

    &:last-child {
        margin-right: 0;
    }
`;
