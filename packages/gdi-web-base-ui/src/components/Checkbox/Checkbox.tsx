import React from 'react';
import { Wrapper, Content } from './Checkbox.style';
import { Checkbox as CheckboxFluent } from '@fluentui/react';

export type CheckboxProps = {
    label?: string;
    value?: boolean;
    onChange: (
        ev?: React.FormEvent<HTMLInputElement | HTMLElement>,
        checked?: boolean
    ) => void;
    children?: JSX.Element;
    disabled?: boolean;
};

export function Checkbox(props: CheckboxProps) {
    const { label, value = false, disabled } = props;

    return (
        <Wrapper className='Checkbox-wrapper' data-testid='Checkbox-wrapper'>
            <CheckboxFluent
                label={label}
                checked={value}
                onChange={props.onChange}
                disabled={disabled}
            />
            {props.children && <Content>{props.children}</Content>}
        </Wrapper>
    );
}

export default Checkbox;
