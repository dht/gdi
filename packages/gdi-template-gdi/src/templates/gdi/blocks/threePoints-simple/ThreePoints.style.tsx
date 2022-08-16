import styled from 'styled-components';
import { ThreePointsColors } from './ThreePoints';

export const Container = styled.div<{ colors: ThreePointsColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background || '#1a7870'};

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 60px 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1440px;
    height: 400px;
    color: #353;
    margin: 0 auto;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Point = styled.div`
    width: 300px;
    text-align: center;
    padding: 35px 30px 70px;

    @media (max-width: 768px) {
        width: 400px;

        &:nth-child(2n) {
            border-top: 1px solid #aaa;
            border-bottom: 1px solid #aaa;
        }
    }
`;

export const PointTitle = styled.div`
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        font-size: 40px;
        margin-bottom: 15px;
    }
`;

export const PointParagraph = styled.div`
    font-size: 21px;
    line-height: 27px;

    @media (max-width: 768px) {
        font-size: 28px;
        line-height: 44px;
        font-weight: 200;
    }
`;
