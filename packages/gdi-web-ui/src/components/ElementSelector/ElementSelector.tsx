import React from 'react';
import { Dropdown } from '@gdi/web-base-ui';
import { Container } from './ElementSelector.style';

type Option = {
    id: string;
    text: string;
};

export type ElementSelectorProps = {
    value: string;
    onChange: (value?: string) => void;
    options: Option[];
};

export function ElementSelector(props: ElementSelectorProps) {
    const { value, options } = props;

    return (
        <Container
            className='ElementSelector-container'
            data-testid='ElementSelector-container'
        >
            <Dropdown
                value={value}
                onChange={props.onChange}
                options={options}
                placeholder='Image field'
            />
        </Container>
    );
}

export default ElementSelector;
