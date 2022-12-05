import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    width: 480px;
    height: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 20px;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 440px;
    min-height: 50px;
`;

export const SnoozeDuration = styled.div`
    font-size: 50px;
    color: gold;
    font-variation-settings: 'wdth' 100, 'wght' 550;
    margin: 20px 0;
`;

export const Verb = styled.div`
    font-size: 30px;
    font-variation-settings: 'wdth' 100, 'wght' 150;
    color: #ccd;
    margin-bottom: 20px;
`;

export const WrapperCountBar = styled.div`
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    height: 3px;
`;

export const Inner = styled.div<{ animationName: string }>`
    height: 3px;
    background-color: gold;
    width: 0%;
    animation: ${(props) => props.animationName} 4s linear;

    @keyframes count-bar {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }
`;

export const WrapperKeys = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const WrapperKey = styled.div<{ label?: string }>`
    width: 50px;
    height: 50px;
    position: relative;

    &::before {
        content: '';
        background-color: rgba(225, 225, 255, 0.3);
        position: absolute;
        top: 0;
        left: -2px;
        width: 110%;
        height: 130%;
    }

    &::after {
        content: '${(props) => props.label}';
        background-color: rgba(255, 255, 255, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        background-color: #334;
    }

    &.on {
        &::before {
            height: 115%;
            top: 6px;
        }

        &::after {
            top: 5px;
            background-color: #445;
        }
    }
`;

export const WrapperKeyAndDuration = styled.div`
    margin: 4px;
`;

export const KeyLabel = styled.div`
    text-align: center;
    color: gold;
    font-variation-settings: 'wdth' 100, 'wght' 550;
    padding-bottom: 4px;
`;

export const Notes = styled.p`
    position: relative;
    color: #778;
    margin-top: 25px;

    &&:before {
        content: '*';
        position: absolute;
        top: 0;
        left: -10px;
    }
`;
