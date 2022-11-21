import styled from 'styled-components';
import { MyServicesColors } from './MyServices';
import { darken } from 'polished';

export const Container = styled.div<{ colors: MyServicesColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#223'};
    display: flex;
    padding: 100px 0 90px;
    flex-direction: column;
    font-family: ${(props) => props.theme.fontFamily};

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
    width: 1440px;
    margin: 0 auto;
    justify-content: center;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Resume = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex: 1;
    width: 1200px;
`;

export const ResumeColumn = styled.div`
    flex: 1;
    margin: 30px 50px;
    display: flex;
    flex-direction: column;
`;

export const IconWrapper = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
        font-size: 40px;
    }
`;

export const ResumeTitle = styled.h3`
    font-size: 32px;
    padding: 0;
    padding-left: 15px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-variation-settings: 'wdth' 115, 'wght' 250;
`;

export const ResumeTitleText = styled.div`
    margin-left: 5px;
    flex: 1;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 8px;
`;

export const JobTitle = styled.div`
    font-size: 22px;
    font-weight: bold;
    font-variation-settings: 'wdth' 105, 'wght' 250;
    margin-top: 8px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 42px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Period = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 21px;
`;

export const Year = styled.div``;

export const Dash = styled.div`
    padding: 0 3px;
`;

export const JobCompany = styled.div`
    font-size: 27px;
    font-weight: bold;
    font-variation-settings: 'wdth' 105, 'wght' 350;
    color: gold;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 42px;
    }
`;

export const H2 = styled.h2`
    font-size: 37px;
    max-width: 400px;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 45px;
        line-height: 58px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    max-width: 500px;
    text-align: justify;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.6);

    @media (max-width: 768px) {
        line-height: 34px;
        font-size: 22px;
        font-weight: 300;
        text-align: center;
    }
`;

export const Items = styled.div``;

export const Item = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    padding: 20px;
`;
