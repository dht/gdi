import { IBlockInfo } from '@gdi/web-ui';
import React, { FC } from 'react';
import { Container, Flavour } from './Chair.style';

export const id = 'com.useGdi.templates.gdi.ChairI';

export type ChairProps = {
    component: FC<any>;
    blockInfo: IBlockInfo;
};

export function Chair(props: ChairProps) {
    const { component: Cmp, blockInfo } = props;

    function renderFlavour(flavour: string, data: Json) {
        return (
            <Flavour className={`photoBooth-flavour-${flavour}`}>
                <Cmp key={data.id} {...data} />
            </Flavour>
        );
    }

    function renderFlavours() {
        const { sampleData } = blockInfo;

        return Object.keys(sampleData).map((flavour: string) =>
            renderFlavour(flavour, sampleData[flavour])
        );
    }

    return (
        <Container className='Chair-container' data-testid='Chair-container'>
            {renderFlavours()}
        </Container>
    );
}

export default Chair;
