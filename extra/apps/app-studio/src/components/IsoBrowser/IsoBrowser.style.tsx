import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    width: 320px;
    height: 480px;
`;

export const Items = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    height: 100px;
    width: 96px;
    margin: 5px;
    color: #888;
    font-size: 13px;
    padding: 0 10px;
    background-color: rgba(255, 255, 255, 0.04);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const Thumb = styled.img`
    max-width: 90px;
    max-height: 90px;
`;
