import React from 'react';
import { Container } from './ImportExportLayout.style';
import { Button } from '@gdi/web-ui';

export type ImportExportLayoutProps = {
    callbacks: {
        downloadLayout: () => void;
    };
};

export function ImportExportLayout(props: ImportExportLayoutProps) {
    const { callbacks } = props;

    return (
        <Container
            className='ImportExportLayout-container'
            data-testid='ImportExportLayout-container'
        >
            <Button
                primary
                iconName='Download'
                tooltip='Download Layout'
                onClick={callbacks.downloadLayout}
            />
        </Container>
    );
}

export default ImportExportLayout;
