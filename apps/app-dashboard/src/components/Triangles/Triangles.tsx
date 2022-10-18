import React, { useMemo } from 'react';
import { Container } from './Triangles.style';
import trianglify from 'trianglify';
import palette from './Triangles.colors';

export type TrianglesProps = {
    width: number;
    height: number;
};

export function Triangles(props: TrianglesProps) {
    const { width, height } = props;

    const result = useMemo(() => {
        if (!width || !height) {
            return null;
        }

        return trianglify({
            width,
            height,
            cellSize: 100,
            variance: 1,
            xColors: 'random',
            yColors: 'match',
            fill: true,
            colorSpace: 'lab',
            palette,
            strokeWidth: 0,
        }).toSVG().innerHTML;
    }, [width]);

    if (!width || !height) {
        return null;
    }

    return (
        <Container
            className='Triangles-container'
            data-testid='Triangles-container'
            dangerouslySetInnerHTML={{ __html: result }}
        ></Container>
    );
}

export default Triangles;
