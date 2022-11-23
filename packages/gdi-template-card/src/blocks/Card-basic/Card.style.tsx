import styled from 'styled-components';
import { CardColors } from './Card';
import { darken } from 'polished';

export const Container = styled.div<{ colors: CardColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#223'};
    height: 700px;
    display: flex;
    width: 380px;
    margin: 0 auto;
    color: #334;
    font-family: ${(props) => props.theme.fontFamily};

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
`;

export const Avatar = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-image: url(https://i.pravatar.cc/130?u=27);
    border: 4px solid #fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5),
        inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.div`
    font-size: 22px;
    font-variation-settings: 'wdth' 100, 'wght' 600;
    margin-top: 13px;
`;

export const Top = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const Center = styled.div`
    flex: 1;
`;

export const Bottom = styled.div`
    height: 100px;
`;

export const JobTitle = styled.div`
    margin-top: 2px;
    margin-bottom: 10px;
    font-size: 18px;
    font-variation-settings: 'wdth' 120, 'wght' 250;
`;
