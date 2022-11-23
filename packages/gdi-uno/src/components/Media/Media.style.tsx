import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: #223;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerItem = styled.div`
    width: 650px;
    height: 404px;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s ease-in-out;
    text-align: center;
`;

export const Image = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 650px;
    height: 404px;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Content = styled.div`
    width: 650px;
    height: 404px;
    position: relative;
    overflow: hidden;
`;

export const ContainerDots = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const Dot = styled.div<{ active?: boolean }>`
    width: 10px;
    height: 10px;
    margin: 0 3px;
    border: 1px solid #111;
    background-color: ${(props) => (props.active ? '#111' : 'transparent')};
    border-radius: 50%;
    cursor: pointer;
`;

export const ContainerArrows = styled.div`
    height: 0;
    width: 100%;
    position: relative;
    max-width: 1200px;
`;

export const Arrow = styled.div`
    position: absolute;
    font-size: 50px;
    margin-top: 170px;
    background-color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    i {
        font-size: 40px;
        color: #555;
    }

    &:nth-child(1) {
        left: 0;
    }

    &:nth-child(2) {
        right: 0;
    }
`;
