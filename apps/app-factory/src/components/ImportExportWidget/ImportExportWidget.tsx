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

            {/* <Button
                iconName='TestBeaker'
                selectedOptionId={mode as string}
                onMenuClick={onMenuClick}
                options={options}
            /> */}

            <Button
                iconName='Download'
                tooltip='Download JSON'
                onClick={callbacks.downloadSiteJson}
            />

            {/* <Button
                iconName='World'
                tooltip='Load JSON from URL'
                onClick={callbacks.importSite}
            /> */}
        </Container>
    );
}

export default ImportExportWidget;
