import React from 'react';
import { Wrapper } from './Switcher.style';
import { Switch } from '@gdi/web-ui';

export type SwitcherProps = {
    options: IOption[];
    value: string;
    onChange: (option: IOption) => void;
};

export function Switcher(props: SwitcherProps) {
    const { value, options } = props;

    return (
        <Wrapper className='Switcher-wrapper' data-testid='Switcher-wrapper'>
            <Switch value={value} options={options} onChange={props.onChange} />
        </Wrapper>
    );
}

export default Switcher;
