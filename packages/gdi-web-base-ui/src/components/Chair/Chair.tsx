import React, { FC } from 'react';
import { Container, Flavour, FlavourTitle } from './Chair.style';

export const id = 'com.usegdi.templates.basic.ChairI';

export type ChairProps = {
    widget: IWidget;
    sequence: number;
};

export function Chair(props: ChairProps) {
    const { widget, sequence } = props;
    const { id, component: Cmp } = widget;

    function renderFlavour(flavour: string, data: Json, index: number) {
        const { container } = data;

        const className = `${id}-${flavour}`.replace(/\./g, '_');

        if (!Cmp) {
            return null;
        }

        let style: React.CSSProperties = {};

        if (container) {
            style.width = container.width;
            style.height = container.height;
        }

        return (
            <React.Fragment key={index}>
                <FlavourTitle>{flavour}</FlavourTitle>
                <Flavour className={className} style={style}>
                    <Cmp
                        sequence={sequence + index}
                        key={widget.id + '-' + data.id}
                        {...data}
                        isScreenshotMode={true}
                    />
                </Flavour>
            </React.Fragment>
        );
    }

    function renderFlavours() {
        const { sampleData = {} } = widget;

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
