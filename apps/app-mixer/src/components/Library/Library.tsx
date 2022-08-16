import { ImageGallery } from '@gdi/web-ui';
import { IWidgetInstance } from 'igrid';
import React from 'react';
import { Container } from './Library.style';

export type LibraryProps = {
    instance: IWidgetInstance;
    callbacks: {
        onSave: (data: Json) => void;
    };
};

export function Library(props: LibraryProps) {
    const { instance, callbacks } = props;

    function onChange(change: Json) {
        console.log('change ->', change);
        return Promise.resolve(true);
    }

    return (
        <Container
            className='Library-container'
            data-testid='Library-container'
        >
            <ImageGallery />
        </Container>
    );
}

export default Library;
