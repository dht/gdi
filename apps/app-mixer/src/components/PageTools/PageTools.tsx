import React from 'react';
import { Container } from './PageTools.style';
import { Button } from '@gdi/web-ui';

export type PageToolsProps = {
    callbacks: {
        editPage: () => void;
        toggleMixerTree: () => void;
    };
};

export function PageTools(props: PageToolsProps) {
    const { callbacks } = props;

    return (
        <Container
            className='PageTools-container'
            data-testid='PageTools-container'
        >
            <Button
                iconName='Edit'
                tooltip='Edit page'
                onClick={callbacks.editPage}
            />

            <Button
                iconName='WaffleOffice365'
                tooltip='Versions'
                onClick={callbacks.toggleMixerTree}
            />
        </Container>
    );
}

export default PageTools;
