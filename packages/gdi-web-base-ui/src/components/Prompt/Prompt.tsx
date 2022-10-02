import React, { FC, useRef, useState } from 'react';
import {
    Actions,
    Container,
    Content,
    P,
    Warning,
    WarningIcon,
    WarningText,
} from './Prompt.style';
import { Modal } from '../Modal/Modal';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Icon } from '@fluentui/react';
import { AutoComplete } from '../AutoComplete/AutoComplete';

export type PromptProps = {
    title: string;
    flavour: 'confirm' | 'input' | 'select' | 'form';
    params: Json;
    submitButtonText: string;
    onCancel: () => void;
    onSubmit: (value?: any) => void;
    formComponent?: FC<IFormProps>;
};

export function Prompt(props: PromptProps) {
    const { title, flavour, params, submitButtonText, formComponent } = props;

    const { description, warning, defaultValue = '' } = params;
    const [value, setValue] = useState(defaultValue);
    const ref = useRef<HTMLDivElement>(null);

    const focusOnSubmit = flavour === 'confirm';

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

    function onKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
        if (ev.code !== 'Enter') {
            return;
        }

        if (flavour === 'input' || (flavour === 'select' && ev.altKey)) {
            onSubmit();
        }
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
                            onKeyDown={onKeyDown}
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
                        <AutoComplete
                            placeholder={params.placeholder}
                            ref={ref}
                            options={params.options}
                            onKeyDown={onKeyDown}
                            onChange={setValue}
                        />
                        {renderWarning()}
                    </Content>
                );

            case 'form':
                const Cmp = formComponent;

                if (!Cmp) {
                    return null;
                }
                return (
                    <Content>
                        <Cmp {...params} onSubmit={props.onSubmit} />
                    </Content>
                );
        }
    }

    const focusOnClassName = focusOnSubmit ? '.ms-Button--primary' : '';

    return (
        <Modal
            title={title}
            open={true}
            ariaLabel={title}
            onClose={onClose}
            focusOnClassName={focusOnClassName}
        >
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
                            withCtrl: true,
                            key: '5',
                        }}
                    />
                </Actions>
            </Container>
        </Modal>
    );
}

export default Prompt;
