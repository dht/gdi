import React, { useState } from 'react';
import { Actions, Container, Content, P } from './Prompt.style';
import { Modal, Input, Dropdown, Button } from '@gdi/web-ui';

export type PromptProps = {
    title: string;
    flavour: 'confirm' | 'input' | 'select';
    params: Json;
    submitButtonText: string;
    onCancel: () => void;
    onSubmit: (value?: any) => void;
};

export function Prompt(props: PromptProps) {
    const [value, setValue] = useState('');
    const { title, flavour, params, submitButtonText } = props;
    const { description } = params;

    function onClose() {
        props.onCancel();
    }

    function onSubmit() {
        props.onSubmit(value);
    }

    function renderInner() {
        switch (flavour) {
            case 'confirm':
                return (
                    <Content>
                        <P>{description}</P>
                    </Content>
                );

            case 'input':
                return (
                    <Content>
                        <P>{description}</P>
                        <Input
                            placeholder={params.params}
                            label={params.label}
                            onChange={(_event: any, newValue?: string) =>
                                setValue(newValue || '')
                            }
                        />
                    </Content>
                );

            case 'select':
                return (
                    <Content>
                        <P>{description}</P>
                        <Dropdown
                            placeholder={params.params}
                            label={params.label}
                            options={params.options}
                            onChange={setValue}
                        />
                    </Content>
                );
        }
    }

    return (
        <Modal title={title} open={true} ariaLabel={title} onClose={onClose}>
            <Container
                className='Prompt-container'
                data-testid='Prompt-container'
            >
                {renderInner()}
                <Actions>
                    <Button title='Cancel' onClick={onClose} />
                    <Button
                        primary
                        title={submitButtonText}
                        onClick={onSubmit}
                        shortKey={{
                            ctrlKey: true,
                            key: '5',
                        }}
                    />
                </Actions>
            </Container>
        </Modal>
    );
}

export default Prompt;
