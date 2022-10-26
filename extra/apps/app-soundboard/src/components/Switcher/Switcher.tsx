import React from 'react';
import { Container } from './Switcher.style';
import { Switch, SwitchOption } from '@gdi/web-ui';

export type SwitcherProps = {
    options: SwitchOption[];
    value: string;
    onChange: (option: SwitchOption) => void;
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
