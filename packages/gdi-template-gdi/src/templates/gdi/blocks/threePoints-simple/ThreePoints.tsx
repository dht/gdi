import React from 'react';
import {
    Container,
    Wrapper,
    Point,
    PointTitle,
    PointParagraph,
} from './ThreePoints.style';

export const id = 'com.useGdi.templates.gdi.threePoints-simple';

export type ThreePointsProps = {
    strings: ThreePointsStrings;
    colors: ThreePointsColors;
    extra: ThreePointsExtra;
};

export type ThreePointsStrings = {
    point1Title: string;
    point1Paragraph: string;
    point2Title: string;
    point2Paragraph: string;
    point3Title: string;
    point3Paragraph: string;
};

export type ThreePointsColors = {
    background?: string;
    text?: string;
};

export type ThreePointsExtra = {};

export function ThreePoints(props: ThreePointsProps) {
    const { strings, colors } = props;
    const {
        point1Title,
        point1Paragraph,
        point2Title,
        point2Paragraph,
        point3Title,
        point3Paragraph,
    } = strings;

    return (
        <Container
            className='ThreePoints-container'
            data-testid='ThreePoints-container'
            colors={colors}
        >
            <Wrapper>
                <Point>
                    <PointTitle>{point1Title}</PointTitle>
                    <PointParagraph>{point1Paragraph}</PointParagraph>
                </Point>
                <Point>
                    <PointTitle>{point2Title}</PointTitle>
                    <PointParagraph>{point2Paragraph}</PointParagraph>
                </Point>
                <Point>
                    <PointTitle>{point3Title}</PointTitle>
                    <PointParagraph>{point3Paragraph}</PointParagraph>
                </Point>
            </Wrapper>
        </Container>
    );
}

export default ThreePoints;
