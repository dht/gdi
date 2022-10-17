import React, { useMemo } from 'react';
import { Container } from './YourBusiness.style';
import palette from './YourBusiness.colors';
import trianglify from 'trianglify';

export type YourBusinessProps = {
    fontFamily: string;
    text: string;
};

export function YourBusiness(props: YourBusinessProps) {
    const { fontFamily, text } = props;

    const result = useMemo(() => {
        return trianglify({
            width: 800,
            height: 140,
            cellSize: 100,
            variance: 1,
            xColors: 'random',
            yColors: 'match',
            fill: true,
            colorSpace: 'lab',
            palette,
            strokeWidth: 0,
        }).toSVG().innerHTML;
    }, []);

    const style = useMemo(() => {
        return {
            font: `bold 150px '${fontFamily}'`,
        };
    }, [fontFamily]);

    return (
        <Container
            className='YourBusiness-container'
            data-testid='YourBusiness-container'
        >
            <svg width='1200' height='140' viewBox='0 0 1200 140'>
                <mask id='svgmask3'>
                    <text className='text' y='120' style={style}>
                        {text}
                    </text>
                </mask>
                <g
                    id='Group-9'
                    dangerouslySetInnerHTML={{ __html: result }}
                    mask='url(#svgmask3)'
                ></g>
            </svg>
        </Container>
    );
}

export default YourBusiness;
