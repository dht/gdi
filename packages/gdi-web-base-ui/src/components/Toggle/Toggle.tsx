import React from 'react';
import { Container } from './Toggle.style';
import { Toggle as ToggleUI } from '@fluentui/react';

export type ToggleProps = {
    placeholder?: string;
    value?: boolean;
    label?: string;
    onChange: (ev: React.MouseEvent<HTMLElement>, checked?: boolean) => void; // prettier-ignore
    readOnly?: boolean;
};

export function Toggle(props: ToggleProps) {
    const { value, label, readOnly } = props;

    return (
        <Container className='Toggle-container' data-testid='Toggle-container'>
            <ToggleUI
                label={label}
                checked={value}
                onChange={props.onChange}
                disabled={readOnly}
            />
        </Container>
    );
}

export default Toggle;
