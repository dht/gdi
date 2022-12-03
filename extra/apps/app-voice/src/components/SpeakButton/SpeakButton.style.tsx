import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    width: 200px;
    height: 200px;
    margin: 100px auto;
    border-radius: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #446;
    box-shadow: inset 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #557;
    }

    &.on {
        background-color: #464;
        position: relative;
        bottom: 3px;
        ${(props) => props.theme.left('3px')}
        box-shadow: inset 3px -3px 10px 10px rgba(0, 0, 0, 0.2);
    }

    i {
        font-size: 100px;
        width: 100px;
    }
`;
