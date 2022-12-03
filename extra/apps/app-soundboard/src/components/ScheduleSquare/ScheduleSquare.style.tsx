import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2px 8px;

    border: 3px solid transparent;

    .key {
        display: none;
    }

    &:hover {
        .key {
            display: block;
        }
    }

    &.current {
        border: 3px solid magenta;
        box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3),
            inset 0 0 3px 3px rgba(0, 0, 0, 0.1);
    }

    &:nth-child(3n - 1) {
        background-color: rgba(0, 0, 0, 0.12);
    }
`;

export const Text = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const ProjectKey = styled.div`
    position: absolute;
    top: 0;
    ${(props) => props.theme.right(0)}
    font-size: 10px;
    opacity: 0.7;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 2px 3px;
`;

export const TicketKey = styled.div`
    position: absolute;
    top: 0;
    ${(props) => props.theme.right(0)}
    font-size: 10px;
    opacity: 0.7;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 2px 3px;
`;
