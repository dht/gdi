import React, { FC } from 'react';
import { Container, Flavour, FlavourTitle } from './Chair.style';

export const id = 'com.usegdi.templates.futuristic.ChairI';

export type ChairProps = {
    component: FC<any>;
    widget: IWidget;
    sequence: number;
};

export function Chair(props: ChairProps) {
    const { component: Cmp, widget, sequence } = props;
    const { id } = widget;

    function renderFlavour(flavour: string, data: Json, index) {
        const className = `${id}-${flavour}`.replace(/\./g, '_');

        return (
            <>
                <FlavourTitle>{flavour}</FlavourTitle>
                <Flavour className={className}>
                    <Cmp
                        sequence={sequence + index}
                        key={widget.id + '-' + data.id}
                        {...data}
                        isScreenshotMode={true}
                    />
                </Flavour>
            </>
        );
    }

    function renderFlavours() {
        const { sampleData } = widget;

        return Object.keys(sampleData).map((flavour: string, index) =>
            renderFlavour(flavour, sampleData[flavour], index)
        );
    }

    return (
        <Container className='Chair-container' data-testid='Chair-container'>
            {renderFlavours()}
        </Container>
    );
}

export default Chair;
