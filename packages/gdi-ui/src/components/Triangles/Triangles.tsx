import React, { useEffect, useMemo } from 'react';
import { Bk, Wrapper, ContainerBk, Fg } from './Triangles.style';
import trianglify from 'trianglify';
import allPalettes from './Triangles.colors';
import { useMeasure } from 'react-use';

export type TrianglesBkProps = {
    children: JSX.Element | JSX.Element[];
    onLoad?: (palette: string[]) => void;
    paletteIndex?: number;
};

export function TrianglesBk(props: TrianglesBkProps) {
    const { paletteIndex } = props;
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    return (
        <ContainerBk
            className='TrianglesBk-wrapper'
            data-testid='TrianglesBk-wrapper'
            ref={ref}
        >
            <Bk>
                <Triangles
                    width={width}
                    height={height}
                    onLoad={props.onLoad}
                    paletteIndex={paletteIndex}
                />
            </Bk>
            <Fg className='fg'>{props.children}</Fg>
        </ContainerBk>
    );
}

export type TrianglesProps = {
    width: number;
    height: number;
    onLoad?: (palette: string[]) => void;
    paletteIndex?: number;
};

export function Triangles(props: TrianglesProps) {
    const { width, height, paletteIndex } = props;

    const palette = useMemo(() => {
        const keys = Object.keys(allPalettes);
        const randomIndex = Math.floor(Math.random() * keys.length);

        const key =
            typeof paletteIndex !== 'undefined'
                ? keys[paletteIndex]
                : keys[randomIndex];

        return {
            [key]: (allPalettes as any)[key],
        };
    }, [paletteIndex]);

    useEffect(() => {
        if (!props.onLoad || !palette) {
            return;
        }

        props.onLoad(Object.values(palette)[0]);
    }, [palette]);

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
    }, [width, palette]);

    if (!width || !height) {
        return null;
    }

    return (
        <Wrapper
            className='Triangles-wrapper'
            data-testid='Triangles-wrapper'
            dangerouslySetInnerHTML={{ __html: result }}
        ></Wrapper>
    );
}
export default Triangles;
