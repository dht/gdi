import classnames from 'classnames';
import React, { FC, useRef, useState } from 'react';
import { Button } from '../Button/Button';
import Icon from '../Icon/Icon';
import { Input } from '../Input/Input';
import { Modal } from '../Modal/Modal';
import {
  Actions,
  Content,
  Description,
  Warning,
  WarningIcon,
  WarningText,
  Wrapper,
} from './Prompt.style';
import { Flavour } from './Prompt.types';
import { useKey } from 'react-use';

export type PromptProps = {
  title: string;
  flavour: Flavour;
  params: Json;
  ctaButtonText: string;
  hideBackdrop?: boolean;
  darkMode?: boolean;
  onCancel: () => void;
  onCta: (value?: any) => Promise<boolean>;
  formComponent?: FC<any>;
};

export function Prompt(props: PromptProps) {
  const { title, flavour, params, ctaButtonText, formComponent, hideBackdrop, darkMode } = props;
  const { description, warning, defaultValue = '' } = params ?? {};
  const [value, setValue] = useState(defaultValue);
  const ref = useRef<HTMLDivElement>(null);

  const focusOnCta = flavour === 'confirm';

  function onClose() {
    props.onCancel();
  }

  function onCta() {
    if (flavour === 'input' && !value) {
      if (ref.current) {
        const el = ref.current.querySelector('input');

        if (el) {
          el.focus();
        }
      }
      return;
    }

    props.onCta(value);
  }

  function onKeyDown(ev: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (ev.code !== 'Enter') {
      return;
    }

    if (flavour === 'input') {
      onCta();
    }
  }

  function renderDescription() {
    return <Description>{description}</Description>;
  }

  function renderWarning() {
    if (!warning) {
      return null;
    }

    return (
      <Warning>
        <WarningIcon>
          <Icon name='warning' />
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
              width={500}
              autoFocus
              darkMode={darkMode}
              autoSelect
              onChange={(ev: any) => {
                setValue(ev.target.value ?? '');
              }}
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
              onSubmit={(_change: Json, allValues: Json) => props.onCta(allValues)}
            />
          </>
        );

      case 'custom':
        const Custom = params.component;

        if (typeof Custom !== 'function') {
          return null;
        }

        return <Custom {...params.componentProps} onCta={props.onCta} onCancel={onClose} />;
    }
  }

  function renderActions() {
    if (flavour === 'form' || flavour === 'custom') {
      return null;
    }

    return (
      <Actions>
        <Button
          color={darkMode ? 'primary' : 'secondary'}
          link
          testId='prompt-cancel-btn'
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button color='primary' testId='prompt-cta-btn' onClick={onCta}>
          {ctaButtonText}
        </Button>
      </Actions>
    );
  }

  const focusOnClassName = focusOnCta ? '.prompt-cta-btn' : '';

  const className = classnames('Prompt-wrapper', flavour, {});
  const classNameContent = classnames(flavour, {});

  return (
    <Modal
      title={title}
      open={true}
      onClose={onClose}
      darkMode={darkMode}
      hideBackdrop={hideBackdrop}
      focusOnClassName={focusOnClassName}
      dataTestId={`prompt_${flavour}`}
    >
      <Wrapper className={className} data-testid='Prompt-wrapper' ref={ref}>
        <Content className={classNameContent}>{renderInner()}</Content>
        {renderActions()}
      </Wrapper>
    </Modal>
  );
}

export default Prompt;
