import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Top = styled.div<{ height?: string }>`
    height: ${(props) => props.height || '25vh'};
    position: relative;
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    .fg {
        background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.9) 10%,
            rgba(0, 0, 0, 0) 100%
        );
    }

    &.raw {
        .fg {
            background-image: none;
        }
    }
`;

export const Details = styled.div`
    position: absolute;
    bottom: -50px;
    ${(props) => props.theme.left('50px')}
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Header = styled.div`
    ${(props) => props.theme.marginLeft('40px')}
    margin-bottom: 15px;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
`;

export const Title = styled.div`
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 300;
`;

export const Subtitle = styled.div`
    font-size: 20px;
    font-weight: 200;
    color: gold;
`;

export const SettingsWrapper = styled.div`
    position: absolute;
    ${(props) => props.theme.left('500px')}
    top: 14px;
`;
