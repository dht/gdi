import React from 'react';
import { Wrapper, Title } from './Palette.style';
import { ColorPalette, List } from '@gdi/web-ui';
import classnames from 'classnames';

export type PaletteProps = {
    options: IPalette[];
    selectedPaletteId: string;
    onSelect: (id: string) => void;
};

export function Palette(props: PaletteProps) {
    const { options, selectedPaletteId } = props;

    function renderItem(option: any, selected: boolean) {
        const { title } = option as IPalette;

        const className = classnames({
            selected,
        });

        return (
            <>
                <Title className={className}>{title}</Title>
                <ColorPalette palette={option} />
            </>
        );
    }

    return (
        <Wrapper className='Palette-wrapper' data-testid='Palette-wrapper'>
            <List
                options={options as any[]}
                renderItem={renderItem}
                onSelect={props.onSelect}
                selectedOptionId={selectedPaletteId}
            />
        </Wrapper>
    );
}

export default Palette;
