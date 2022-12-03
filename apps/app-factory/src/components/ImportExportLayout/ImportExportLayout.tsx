import React from 'react';
import { Wrapper } from './ImportExportLayout.style';
import { Button } from '@gdi/web-ui';

export type ImportExportLayoutProps = {
    callbacks: {
        downloadLayout: () => void;
    };
};

export function ImportExportLayout(props: ImportExportLayoutProps) {
    const { callbacks } = props;

    return (
        <Wrapper
            className='ImportExportLayout-wrapper'
            data-testid='ImportExportLayout-wrapper'
        >
            <Button
                primary
                iconName='Download'
                tooltip='Download Layout'
                onClick={callbacks.downloadLayout}
            />
        </Wrapper>
    );
}

export default ImportExportLayout;
