import React, { useCallback, useMemo } from 'react';
import {
    DefaultButton,
    IContextualMenuProps,
    PrimaryButton,
} from '@fluentui/react';
import { IShortKey, useShortKey, useShortKeys } from '../../hooks/useShortKeys';

export type ButtonProps = {
    title?: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
    iconName?: string;
    primary?: boolean;
    disabled?: boolean;
    isSubmit?: boolean;
    isSubmitting?: boolean;
    options?: IOption[];
    selectedOptionId?: string;
    onMenuClick?: (option: IOption) => void;
    shortKey?: IShortKey;
    tooltip?: string;
};

export type IOption = {
    id: string;
    text: string;
    iconName?: string;
    secondaryText?: string;
    shortKey?: IShortKey;
};

export function Button(props: ButtonProps) {
    let {
        title,
        primary,
        disabled,
        iconName,
        options = [],
        selectedOptionId,
        shortKey,
        isSubmit,
        tooltip,
    } = props;

    const Cmp = primary ? PrimaryButton : DefaultButton;

    if (selectedOptionId) {
        const option = options.find((item) => item.id === selectedOptionId);
        if (option && option.iconName) {
            iconName = option.iconName;
        }
    }

    const shortKeys = useMemo(() => {
        return options
            .filter((option) => option.shortKey)
            .map((option) => ({
                ...option.shortKey!,
                id: option.id,
            }));
    }, [options]);

    const onShortKey = useCallback(
        (optionId: string) => {
            const option = options.find((item) => item.id === optionId);

            if (option && props.onMenuClick) {
                props.onMenuClick(option);
            }
        },
        [options]
    );

    useShortKeys(shortKeys, onShortKey);

    useShortKey(shortKey, () => {
        if (!props.onClick) {
            return;
        }
        props.onClick({} as any);
    });

    const iconProps = useMemo(() => {
        return iconName ? { iconName } : {};
    }, []);

    function onMenuClick(option: IOption) {
        if (!props.onMenuClick) {
            return;
        }
        props.onMenuClick(option);
    }

    const menuProps: IContextualMenuProps | undefined = useMemo(() => {
        if (options.length === 0) {
            return;
        }

        return {
            items: options.map((option) => ({
                key: option.text,
                text: option.text,
                iconProps: { iconName: option.iconName },
                secondaryText: option.secondaryText,
                onClick: () => onMenuClick(option),
            })),
        };
    }, [options]);

    const type = isSubmit ? 'submit' : 'button';

    return (
        <Cmp
            className='Button-container'
            data-testid='Button-container'
            iconProps={iconProps}
            menuProps={menuProps}
            onClick={props.onClick}
            title={tooltip}
            text={title}
            type={type}
            disabled={disabled}
        />
    );
}

export default Button;
