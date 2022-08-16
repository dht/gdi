import styled from 'styled-components';

export const Container = styled.div`
    .button {
        i {
            display: none;
        }
    }
`;

export const Overlay = styled.div<{ show: boolean }>`
    position: absolute;
    left: 70px;
    width: 300px;
    height: 380px;
    bottom: 20px;
    box-shadow: 3px 3px 20px 15px rgba(0, 0, 0, 0.4);
    border-radius: 130px 130px 0 0;
    transition: all 150ms ease-out;
    pointer-events: ${(props) => (props.show ? 'all' : 'none')};
    opacity: ${(props) => (props.show ? 1 : 0)};
    z-index: 10;

    &.show {
        opacity: 1;
        pointer-events: all;
    }
`;

export const UserImage = styled.div`
    width: 80px;
    height: 80px;
    background-color: #223;
    background-size: contain;
    border-radius: 40px;
    position: absolute;
    top: -25px;
    left: 106px;
    box-shadow: 0 -5px 13px 3px rgba(255, 255, 255, 0.1);
    border: 2px solid #445;
`;

export const TopArc = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Top = styled.div`
    height: 140px;
    padding-top: 64px;
    box-sizing: border-box;
`;

export const Menu = styled.div``;

export const MenuItem = styled.div`
    font-size: 20px;
    background-color: #223;
    flex: 1;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 30px;
    position: relative;
    color: #ddd;

    &:nth-child(2n) {
        background-color: #334;
    }

    cursor: pointer;

    &:hover {
        color: gold;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    .icon {
        position: relative;
        top: 2px;
        font-size: 25px;
    }
`;

export const Title = styled.div`
    margin-left: 18px;
`;
export const Name = styled.div`
    font-size: 28px;
    text-align: center;
    opacity: 0.85;
    line-height: 36px;
`;

export const Company = styled.div`
    font-size: 20px;
    color: gold;
    font-weight: 200;
    text-align: center;
    opacity: 0.85;
`;
