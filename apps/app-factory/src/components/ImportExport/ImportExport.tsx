import React from 'react';
import { Container } from './ImportExport.style';
import { Button } from '@gdi/web-ui';

export type ImportExportProps = {
    callbacks: {
        openPreview: () => void;
        downloadSiteJson: () => void;
        importSite: () => void;
    };
};

export function ImportExport(props: ImportExportProps) {
    const { callbacks } = props;

    return (
        <Container
            className='ImportExport-container'
            data-testid='ImportExport-container'
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

export default ImportExport;
