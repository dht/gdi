import React, { useMemo } from 'react';
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

    const optionsParsed = useMemo(() => {
        return options.map((option) => ({
            value: option.id,
            label: option.text,
        }));
    }, [options]);

    return (
        <Container
            className='ElementSelector-container'
            data-testid='ElementSelector-container'
        >
            <Dropdown
                value={value}
                onChange={props.onChange}
                options={optionsParsed}
                placeholder='Choose an image field'
            />
        </Container>
    );
}

export default ElementSelector;
