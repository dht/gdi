import React, { useRef, useState } from 'react';
import {
    Actions,
    Container,
    Content,
    P,
    Warning,
    WarningIcon,
    WarningText,
} from './Prompt.style';
import { Modal, Input, Dropdown, Button, Icon } from '@gdi/web-ui';

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
    const { description, warning } = params;
    const ref = useRef<HTMLDivElement>(null);

    function onClose() {
        props.onCancel();
    }

    function onSubmit() {
        if (flavour === 'input' && !value) {
            if (ref.current) {
                const el = ref.current.querySelector('input');
                if (el) {
                    el.focus();
                }
            }
            return;
        }
        props.onSubmit(value);
    }

    function renderDescription() {
        return <P>{description}</P>;
    }

    function renderWarning() {
        if (!warning) {
            return null;
        }

        return (
            <Warning>
                <WarningIcon>
                    <Icon iconName='Warning'></Icon>
                </WarningIcon>
                <WarningText>{warning}</WarningText>
            </Warning>
        );
    }

    function renderInner() {
        switch (flavour) {
            case 'confirm':
                return (
                    <Content>
                        {renderDescription()}
                        {renderWarning()}
                    </Content>
                );

            case 'input':
                return (
                    <Content>
                        {renderDescription()}
                        <Input
                            placeholder={params.placeholder}
                            label={params.label}
                            value={value}
                            onChange={(ev: any) => {
                                setValue(ev.target.value || '');
                            }}
                        />
                        {renderWarning()}
                    </Content>
                );

            case 'select':
                return (
                    <Content>
                        {renderDescription()}
                        <Dropdown
                            placeholder={params.placeholder}
                            label={params.label}
                            ref={ref}
                            options={params.options}
                            onChange={setValue}
                        />
                        {renderWarning()}
                    </Content>
                );
        }
    }

    return (
        <Modal title={title} open={true} ariaLabel={title} onClose={onClose}>
            <Container
                className='Prompt-container'
                data-testid='Prompt-container'
                ref={ref}
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
