import React from 'react';
import { Wrapper } from './Packages.style';
import { KeyValue } from '@gdi/web-ui';

export type PackagesProps = {
    items: Json;
};

export type IPackage = {
    name: string;
    version: string;
};

export function Packages(props: PackagesProps) {
    const { items } = props;

    return (
        <Wrapper className='Packages-wrapper' data-testid='Packages-wrapper'>
            <KeyValue data={items} flex={[4, 1]} />
        </Wrapper>
    );
}

export default Packages;
