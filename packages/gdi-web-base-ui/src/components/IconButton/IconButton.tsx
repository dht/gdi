import React from 'react';
import { Wrapper } from './IconButton.style';
import { IconButton as IconButtonUI } from '@fluentui/react';
import classnames from 'classnames';

export type IconButtonProps = {
    iconName: string;
    title?: string;
    ariaLabel?: string;
    className?: string;
    onClick: () => void;
};

export function IconButton(props: IconButtonProps) {
    const { iconName, title, ariaLabel } = props;

    const className = classnames(props.className, 'IconButton-wrapper');

    return (
        <Wrapper>
            <IconButtonUI
                className={className}
                data-testid='IconButton-wrapper'
                iconProps={{ iconName }}
                title={title}
                ariaLabel={ariaLabel}
                onClick={props.onClick}
            />
        </Wrapper>
    );
}

export default IconButton;
