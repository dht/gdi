import React from 'react';
import { Dropdown } from '@gdi/web-base-ui';
import { Wrapper } from './ElementSelector.style';

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
        <Wrapper
            className='ElementSelector-wrapper'
            data-testid='ElementSelector-wrapper'
        >
            <Dropdown
                value={value}
                onChange={props.onChange}
                options={options}
                placeholder='Image field'
            />
        </Wrapper>
    );
}

export default ElementSelector;
