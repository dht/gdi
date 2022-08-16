import React from 'react';
import { Container } from './Views.style';
import { options } from './Views.options';
import { Button } from '@gdi/web-ui';
import type { IViewMode } from '@gdi/store-mixer';

export type ViewsProps = {
    mode: IViewMode;
    onChange: (mode: IViewMode) => void;
};

export function Views(props: ViewsProps) {
    const { mode } = props;

    function onMenuClick(option: any) {
        props.onChange(option.id as IViewMode);
    }

    return (
        <Container className='Views-container' data-testid='Views-container'>
            <Button
                selectedOptionId={mode as string}
                onMenuClick={onMenuClick}
                options={options}
                tooltip='Change View'
            />
        </Container>
    );
}

export default Views;
