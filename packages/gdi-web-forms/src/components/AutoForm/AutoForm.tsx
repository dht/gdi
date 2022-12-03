import React from 'react';
import { Button, Container } from './AutoForm.style';

type IAutoFormData = {
    id: string;
    title: string;
    data: Json;
};

export type AutoFormProps = {
    forms: Record<string, IAutoFormData>;
};

export function AutoForm(props: AutoFormProps) {
    const { forms } = props;

    function fillForm(data: Json) {
        const event = new CustomEvent('FILL_FORM', { detail: data });
        document.dispatchEvent(event);
    }

    function renderButton(form: IAutoFormData) {
        const { id, title, data } = form;

        return (
            <Button key={id} className='form' onClick={() => fillForm(data)}>
                {title}
            </Button>
        );
    }

    function renderButtons() {
        return Object.values(forms).map((form: IAutoFormData) =>
            renderButton(form)
        );
    }
    return (
        <Wrapper className='AutoForm-wrapper' data-testid='AutoForm-wrapper'>
            {renderButtons()}
        </Wrapper>
    );
}

export default AutoForm;
