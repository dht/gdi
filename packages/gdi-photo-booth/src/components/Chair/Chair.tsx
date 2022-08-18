import { IBlockInfo } from '@gdi/web-ui';
import React, { FC } from 'react';
import { Container, Flavour } from './Chair.style';

export const id = 'com.usegdi.templates.gdi.ChairI';

export type ChairProps = {
    component: FC<any>;
    blockInfo: IBlockInfo;
    sequence: number;
};

export function Chair(props: ChairProps) {
    const { component: Cmp, blockInfo, sequence } = props;
    const { id } = blockInfo;

    function renderFlavour(flavour: string, data: Json, index) {
        const className = `${id}-${flavour}`.replace(/\./g, '_');

        return (
            <Flavour className={className}>
                <Cmp
                    sequence={sequence + index}
                    key={blockInfo.id + '-' + data.id}
                    {...data}
                    isScreenshotMode={true}
                />
            </Flavour>
        );
    }

    function renderFlavours() {
        const { sampleData } = blockInfo;

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
