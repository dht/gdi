import React from 'react';
import { Container } from './ImportExportWidget.style';
import { Button } from '@gdi/web-ui';

export type ImportExportWidgetProps = {
    callbacks: {
        openPreview: () => void;
        downloadSiteJson: () => void;
        importSite: () => void;
    };
};

export function ImportExportWidget(props: ImportExportWidgetProps) {
    const { callbacks } = props;

    return (
        <Container
            className='ImportExportWidget-container'
            data-testid='ImportExportWidget-container'
        >
            <Button
                primary
                iconName='OpenInNewTab'
                tooltip='Show preview'
                onClick={callbacks.openPreview}
            />

            <Button
                iconName='Download'
                tooltip='Download JSON'
                onClick={callbacks.downloadSiteJson}
            />
        </Container>
    );
}

export default ImportExportWidget;
