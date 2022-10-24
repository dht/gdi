import styled from 'styled-components';
import { FooterColors } from './Footer';

export const Container = styled.div<{ colors: FooterColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background ?? 'white'};
    padding: 20px 0;
    color: #353;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 24px;
        padding: 40px 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
        margin-left: 20px;
    }
`;
export const Link = styled.a`
    margin: 0 10px;
    color: #343;
    text-decoration: none;
    transition: all 30ms linear;
    cursor: pointer;

    &:hover {
        color: dodgerblue;
        text-decoration: underline;
    }
`;
export const Copy = styled.div``;

export const GDI = styled.div`
    margin-left: 30px;

    &:before {
        content: '•';
        position: relative;
        right: 15px;
    }
`;
