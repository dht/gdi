import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    height: 120vh;
    background-image: url(/laptop-bk-4b.png);
    background-size: cover;
    background-position: center bottom;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const IFrame = styled.iframe`
    width: 900px;
    height: 560px;
    margin-top: -80px;
    margin-left: -18px;
    transform: perspective(1000px) rotateX(1.5deg);
`;

export const Header = styled.div`
    position: absolute;
    top: 68vh;
    left: 7vw;
    font-size: 50px;
    font-variation-settings: 'wdth' 100, 'wght' 680;
    padding: 5px 30px;
    border-radius: 15px;
    color: #333;

    span {
        font-size: 40px;
    }
`;

export const Text = styled.div``;

export const Location = styled.div`
    font-size: 40px;
    font-variation-settings: 'wdth' 100, 'wght' 300;
`;

export const Next = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    transform: translate(500px, -50px);
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    i {
        font-size: 60px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

    &:active {
        transform: translate(498px, -48px);
    }
`;
