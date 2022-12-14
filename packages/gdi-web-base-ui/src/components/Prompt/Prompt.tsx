import React, { FC, useRef, useState } from 'react';
import {
    Actions,
    Wrapper,
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
import classnames from 'classnames';
import PieMenu from '../PieMenu/PieMenu';
import Choice from '../Choice/Choice';

export type PromptProps = {
    title: string;
    flavour:
        | 'confirm'
        | 'input'
        | 'select'
        | 'form'
        | 'pie'
        | 'choice'
        | 'custom';
    params: Json;
    submitButtonText: string;
    onCancel: () => void;
    onSubmit: (value?: any) => Promise<boolean>;
    formComponent?: FC<IFormProps>;
    isRtl?: boolean;
};

export function Prompt(props: PromptProps) {
    const { title, flavour, params, submitButtonText, formComponent, isRtl } =
        props;

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
                    <>
                        {renderDescription()}
                        {renderWarning()}
                    </>
                );

            case 'input':
                return (
                    <>
                        {renderDescription()}
                        <Input
                            placeholder={params.placeholder}
                            label={params.label}
                            value={value}
                            onKeyDown={onKeyDown}
                            onChange={(ev: any) => {
                                setValue(ev.target.value ?? '');
                            }}
                        />
                        {renderWarning()}
                    </>
                );

            case 'select':
                return (
                    <>
                        {renderDescription()}
                        <AutoComplete
                            placeholder={params.placeholder}
                            ref={ref}
                            options={params.options}
                            onKeyDown={onKeyDown}
                            onChange={setValue}
                        />
                        {renderWarning()}
                    </>
                );

            case 'form':
                const Cmp = formComponent;

                if (!Cmp) {
                    return null;
                }
                return (
                    <>
                        <Cmp
                            {...(params as any)}
                            onClose={onClose}
                            onSave={props.onSubmit}
                        />
                    </>
                );
            case 'pie':
                return (
                    <>
                        <PieMenu
                            items={params.options}
                            origin={params.point}
                            onSelect={props.onSubmit}
                            onCancel={onClose}
                            minTop={150}
                            isRtl={isRtl}
                        />
                    </>
                );
            case 'choice':
                return (
                    <>
                        <Choice
                            options={params.options}
                            value={value}
                            onKeyDown={onKeyDown}
                            onChange={setValue}
                        />
                    </>
                );
            case 'custom':
                const Custom = params.component;

                if (typeof Custom !== 'function') {
                    return null;
                }

                return (
                    <Custom
                        {...params.componentProps}
                        onSubmit={props.onSubmit}
                        onCancel={onClose}
                    />
                );
        }
    }

    function renderActions() {
        if (flavour === 'form' || flavour === 'custom') {
            return null;
        }

        return (
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
        );
    }

    const focusOnClassName = focusOnSubmit ? '.ms-Button--primary' : '';

    const className = classnames('Prompt-wrapper', flavour, {});
    const classNameContent = classnames(flavour, {});

    if (flavour === 'pie') {
        return renderInner();
    }

    return (
        <Modal
            title={title}
            open={true}
            ariaLabel={title}
            onClose={onClose}
            focusOnClassName={focusOnClassName}
        >
            <Wrapper
                className={className}
                data-testid='Prompt-wrapper'
                ref={ref}
            >
                <Content className={classNameContent}>{renderInner()}</Content>
                {renderActions()}
            </Wrapper>
        </Modal>
    );
}

export default Prompt;
