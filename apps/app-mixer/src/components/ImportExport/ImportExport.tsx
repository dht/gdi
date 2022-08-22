import React from 'react';
import { Container } from './ImportExport.style';
import { options } from './ImportExport.options';
import { Button } from '@gdi/web-ui';
import type { IViewMode } from '@gdi/store-mixer';

export type ImportExportProps = {
    callbacks: {
        openPreview: () => void;
    };
};

export function ImportExport(props: ImportExportProps) {
    const { callbacks } = props;

    function onMenuClick(option: any) {
        // props.onChange(option.id as IViewMode);
    }

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

            <Button iconName='Download' tooltip='Download JSON' />
            <Button iconName='World' tooltip='Load JSON from URL' />
        </Container>
    );
}

export default ImportExport;
