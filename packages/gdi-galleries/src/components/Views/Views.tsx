import React from 'react';
import { Container } from './Views.style';
import { options } from './Views.options';
import { Button } from '@gdi/web-ui';

export type ViewsProps = {
    mode: string;
    onChange: (mode: string) => void;
};
export function Views(props: ViewsProps) {
    const { mode } = props;

    function onMenuClick(option: any) {
        props.onChange(option.id);
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
