import React, { useMemo } from 'react';
import { Character, Wrapper } from './ColorfulHeader.style';

export type ColorfulHeaderProps = {
    children?: string;
    palette: string[];
    double?: number;
};

export function ColorfulHeader(props: ColorfulHeaderProps) {
    let { children: text = '', palette, double = 0 } = props;

    if (double === 0) {
        const textLength = text.length;
        const paletteLength = palette.length * 2;

        double = Math.ceil(textLength / paletteLength);
    }

    const paletteWithDouble = useMemo(() => {
        const output: string[] = [];

        palette.forEach((c) => {
            for (let i = 0; i < double; i++) {
                output.push(c);
            }
        });

        return output;
    }, [palette]);

    const colors = useMemo(() => {
        const reversed = [...paletteWithDouble].reverse();
        return [
            ...reversed,
            ...paletteWithDouble,
            ...reversed,
            ...paletteWithDouble,
            ...reversed,
            ...paletteWithDouble,
        ];
    }, [paletteWithDouble]);

    function renderCharacter(character: string, index: number) {
        const color = colors[index % colors.length];

        const style = {
            color,
        };

        return (
            <Character key={index} style={style}>
                {character}
            </Character>
        );
    }

    function renderCharacters() {
        return text
            .split('')
            .map((character: string, index) =>
                renderCharacter(character, index)
            );
    }

    return (
        <Wrapper
            className='ColorfulHeader-wrapper'
            data-testid='ColorfulHeader-wrapper'
        >
            {renderCharacters()}
        </Wrapper>
    );
}

export default ColorfulHeader;
