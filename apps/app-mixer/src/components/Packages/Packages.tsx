import React from 'react';
import { Container } from './Packages.style';
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
        <Container
            className='Packages-container'
            data-testid='Packages-container'
        >
            <KeyValue data={items} flex={[4, 1]} />
        </Container>
    );
}

export default Packages;
