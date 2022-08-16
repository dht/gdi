import React, { FC } from 'react';
import { Container, Flavour, FlavourTitle } from './PhotoBoothChair.style';

export type PhotoBoothChairProps = {
    component: FC<any>;
    widget: IWidget;
    sequence: number;
};

export function PhotoBoothChair(props: PhotoBoothChairProps) {
    const { component: Cmp, widget, sequence } = props;
    const { id } = widget;

    function renderFlavour(flavour: string, data: Json, index: number) {
        const className = `${id}-${flavour}`.replace(/\./g, '_');

        return (
            <React.Fragment key={index}>
                <FlavourTitle>{flavour}</FlavourTitle>
                <Flavour className={className}>
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
        <Container
            className='PhotoBoothChair-container'
            data-testid='PhotoBoothChair-container'
        >
            {renderFlavours()}
        </Container>
    );
}

export default PhotoBoothChair;
