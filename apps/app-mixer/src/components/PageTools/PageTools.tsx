import React from 'react';
import { Wrapper } from './PageTools.style';
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
        <Wrapper className='PageTools-wrapper' data-testid='PageTools-wrapper'>
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
        </Wrapper>
    );
}

export default PageTools;
