import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 1280px;
    margin: 0 auto;
    flex-direction: column;

    &._4k {
        width: 1920px;
    }

    &._2k {
        width: 1920px;
    }

    &._1080p {
        width: 1600px;
    }

    &._HDplus {
        width: 1360px;
    }

    &._HD {
        width: 1280px;
    }

    &._720p {
        width: 1024px;
    }

    &._tablet {
        width: 100vw;
        margin: 0;
    }

    &._mobile {
        width: 100vw;
        margin: 0;
    }

    &._4k-max {
        max-width: 1920px;
    }

    &._2k-max {
        max-width: 1920px;
    }

    &._1080p-max {
        max-width: 1600px;
    }

    &._HDplus-max {
        max-width: 1360px;
    }

    &._HD-max {
        max-width: 1280px;
    }

    &._720p-max {
        max-width: 1024px;
    }

    &._tablet-max {
        max-width: 100vw;
    }

    &._mobile-max {
        max-width: 100vw;
    }
`;

export const WrapperInfo = styled.div`
    &::after {
        content: '${(props) => props.theme.bpText()}';
        position: fixed;
        bottom: 0;
        left: 50%;
        width: 200px;
        text-align: center;
        transform: translateX(-50%);
        font-size: 20px;
        background-color: #000000dd;
        color: white;
        border-radius: 30px 30px 0 0;
        z-index: 100;
        padding-top: 5px;
        border-top: 1px solid white;
    }
`;
