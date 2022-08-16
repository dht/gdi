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
    children: JSX.Element;
};

export function Checkbox(props: CheckboxProps) {
    const { label, value = false } = props;

    return (
        <Container
            className='Checkbox-container'
            data-testid='Checkbox-container'
        >
            <CheckboxFluent
                label={label}
                defaultChecked={value}
                onChange={props.onChange}
            />
            <Content>{props.children}</Content>
        </Container>
    );
}

export default Checkbox;
