import React, { useMemo } from 'react';
import { Bk, Container, ContainerBk, Fg } from './Triangles.style';
import trianglify from 'trianglify';
import palette from './Triangles.colors';
import { useMeasure } from 'react-use';
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
            // @ts-ignore
        } as any).toSVG().innerHTML;
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

export type TrianglesBkProps = {
    children: JSX.Element | JSX.Element[];
};

export function TrianglesBk(props: TrianglesBkProps) {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    return (
        <ContainerBk
            className='TrianglesBk-container'
            data-testid='TrianglesBk-container'
            ref={ref}
        >
            <Bk>
                <Triangles width={width} height={height} />
            </Bk>
            <Fg className='fg'>{props.children}</Fg>
        </ContainerBk>
    );
}

export default Triangles;
