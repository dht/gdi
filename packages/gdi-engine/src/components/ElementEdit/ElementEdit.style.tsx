import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
    flex: 1;
    margin-bottom: 10px;
    position: relative;
    border: 2px solid transparent;
    border-color: ${(props) => (props.selected ? 'gold' : 'transparent')};
    background-color: #334;
    overflow-x: hidden;

    &:hover {
        &:after {
            content: '';
            position: absolute;
            top: 0;
            ${(props) => props.theme.left(0)}
            ${(props) => props.theme.right(0)}
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.1);
            box-shadow: inset 0 0 5px 10px rgba(0, 0, 0, 0.2);
        }

        .zoom {
            display: block;
        }

        .id {
            display: block;
        }
    }

    &.selected {
    }
`;

export const LoaderWrapper = styled.div`
    position: absolute;
    top: 50px;
    ${(props) => props.theme.left('50%')}
    transform: translateX(-50%);
    width: 100px;
`;

export const Zoom = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 100% 0 0 0;
    cursor: pointer;
    z-index: 999;
    display: none;

    &:hover {
        background-color: gold;
        background-image: radial-gradient(circle, gold 0%, goldenrod 100%);
        box-shadow: inset 0 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

export const Id = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    margin: 20px 15px;
    padding: 5px 15px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.4);
    z-index: 999;
    display: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.53);
        color: rgba(255, 255, 255, 1);
    }
`;
