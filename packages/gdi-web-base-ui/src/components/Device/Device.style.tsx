import styled from 'styled-components';

export const WrapperMobile = styled.div`
    border: 4px solid var(--color);
    width: 380px;
    border-radius: 30px;
    max-width: 400px;
    max-height: 800px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    background-color: #223;
    --color: rgba(255, 255, 255, 0.2);
`;

export const MobileHeader = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MobileSpeaker = styled.div`
    background-color: var(--color);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 80px;
`;

export const MobilePower = styled.div`
    background-color: var(--color);
    width: 100px;
    height: 6px;
    border-radius: 10px;
    margin-left: 50px;
`;

export const MobileContent = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #000000aa;
    flex: 1;
    border-radius: 10px 10px 30px 30px;
`;

export const WrapperDesktop = styled.div`
    border: 4px solid var(--color);
    width: 1440px;
    border-radius: 30px 30px 0 0;
    border-bottom: none;
    max-width: 1440px;
    max-height: 940px;
    margin: 50px auto;
    background-color: #223;
    --color: rgba(255, 255, 255, 0.2);
`;

export const DesktopHeader = styled.div`
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DesktopSpeaker = styled.div`
    background-color: var(--color);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 50%;
`;

export const DesktopContent = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #00000099;
    height: 910px;
`;

export const DesktopKeyboard = styled.div`
    border-radius: 10px 10px 70px 70px;
    border: 4px solid var(--color);
    height: 30px;
    width: 110%;
    left: -5%;
    position: relative;
    background-color: #223;
`;

export const DesktopKeyboardLid = styled.div`
    background-color: var(--color);
    width: 150px;
    height: 10px;
    border-radius: 10px 10px 50px 50px;
    margin-left: calc(50% - 75px);
`;
