import React from 'react';
import { Container } from './Switcher.style';
import { Switch } from '@gdi/web-ui';

export type SwitcherProps = {
    options: IOption[];
    value?: string;
    onChange: (option: IOption) => void;
};

export function Switcher(props: SwitcherProps) {
    const { value, options } = props;

    return (
        <Container
            className='Switcher-container'
            data-testid='Switcher-container'
        >
            <Switch value={value} options={options} onChange={props.onChange} />
        </Container>
    );
}

export default Switcher;
