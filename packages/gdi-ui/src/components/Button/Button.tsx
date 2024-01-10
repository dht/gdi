import React, { ForwardedRef, forwardRef } from 'react';
import { sendButtonClickAnalytics } from '../../analytics';
import { Wrapper } from './Button.style';
import classnames from 'classnames';
import Icon from '../Icon/Icon';

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  testId?: string;
  analyticsId?: string;
  analyticsSelectorId?: string;
  analyticsParams?: Json;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  className?: string;
  link?: boolean;
  inverse?: boolean;
  disabled?: boolean;
  iconName?: string;
};

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    color,
    analyticsId,
    analyticsSelectorId,
    analyticsParams,
    testId,
    link,
    inverse,
    disabled,
    iconName,
    ...rest
  } = props;

  function onClick(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!props.onClick) {
      return;
    }

    if (analyticsId) {
      sendButtonClickAnalytics(ev, {
        testId,
        analyticsId,
        analyticsSelectorId,
        analyticsParams,
      });
    }

    return props.onClick(ev);
  }

  function renderIcon() {
    if (!props.iconName) {
      return null;
    }

    return <Icon className='icon' name={iconName as any} />;
  }

  delete (rest as any)['testId'];

  const className = classnames('Button-wrapper', color, props.className, {
    link,
    inverse,
    hasIcon: iconName,
  });

  return (
    <Wrapper
      disabled={disabled}
      className={className}
      data-testid={testId}
      ref={ref}
      {...rest}
      onClick={onClick}
    >
      {renderIcon()}
      {props.children}
    </Wrapper>
  );
});

export default Button;
