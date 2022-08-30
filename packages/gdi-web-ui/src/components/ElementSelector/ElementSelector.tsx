import { Dropdown } from '@gdi/web-base-ui';
import React from 'react';
import { Container } from './ElementSelector.style';

type Option = {
    key: string;
    text: string;
};

export type ElementSelectorProps = {
    value: string;
    onChange: (value: string) => void;
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
                placeholder='Choose an image field'
            />
        </Container>
    );
}

export default ElementSelector;
