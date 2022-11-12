import styled from 'styled-components';
import { InstallationColors } from './Installation';
import { darken } from 'polished';

export const Container = styled.div<{ colors: InstallationColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background ?? '#ffffff'};
    height: 600px;
    display: flex;
    --grid: rgba(0, 0, 0, 0.15);
    color: #334;

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Details = styled.div`
    background-color: black;
    padding: 20px 40px;
    border-radius: 3px;
    width: 1000px;
`;

export const Text = styled.div`
    font-size: 30px;
    color: #eee;
`;

export const MoreInstructions = styled.div`
    margin-top: 100px;
    font-size: 26px;
`;

export const Link = styled.a`
    color: dodgerblue;
    ${(props) => props.theme.marginLeft('5px')}
    text-decoration: none;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;
