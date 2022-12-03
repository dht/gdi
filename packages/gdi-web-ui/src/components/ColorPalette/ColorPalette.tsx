import React from 'react';
import { Wrapper, WrapperColor } from './ColorPalette.style';

export type ColorPaletteProps = {
    palette: IPalette;
};

export function ColorPalette(props: ColorPaletteProps) {
    const { palette } = props;
    const { color1, color2, color3, color4, color5 } = palette;

    return (
        <Wrapper
            className='ColorPalette-wrapper'
            data-testid='ColorPalette-wrapper'
        >
            <Color color={color1} />
            <Color color={color2} />
            <Color color={color3} />
            <Color color={color4} />
            <Color color={color5} />
        </Wrapper>
    );
}

type ColorProps = {
    color: string;
};

export function Color(props: ColorProps) {
    const { color } = props;

    const style = {
        backgroundColor: color,
    };

    return <WrapperColor style={style} />;
}

export default ColorPalette;
