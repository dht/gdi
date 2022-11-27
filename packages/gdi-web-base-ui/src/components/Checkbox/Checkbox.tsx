import React from 'react';
import { Container, Content } from './Checkbox.style';
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
        <Container
            className='Checkbox-container'
            data-testid='Checkbox-container'
        >
            <CheckboxFluent
                label={label}
                checked={value}
                onChange={props.onChange}
                disabled={disabled}
            />
            {props.children && <Content>{props.children}</Content>}
        </Container>
    );
}

export default Checkbox;
