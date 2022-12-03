import React from 'react';
import { Icon } from '@fluentui/react';
import { Action, Actions, Wrapper, Message } from './Empty.style';
import Button from '../Button/Button';
import classnames from 'classnames';

export type EmptyProps = {
    message?: string;
    withIcon?: boolean;
    iconName?: string;
    actions?: IOptions;
    onAction?: (actionId: string) => void;
};

export function Empty(props: EmptyProps) {
    const {
        message = 'no items',
        iconName = 'CheckListText',
        withIcon,
        actions = [],
    } = props;

    function onAction(action: IOption) {
        if (props.onAction) {
            props.onAction(action.id);
        }
    }

    function renderAction(action: IOption) {
        const { text, iconName } = action;

        return (
            <Action key={action.id} className='action'>
                <Button
                    title={text}
                    iconName={iconName}
                    primary
                    onClick={() => onAction(action)}
                />
            </Action>
        );
    }

    function renderActions() {
        return actions.map((action: IOption) => renderAction(action));
    }

    const className = classnames('Empty-wrapper', {
        noActions: actions.length === 0,
    });

    return (
        <Wrapper className={className} data-testid='Empty-wrapper'>
            {withIcon && <Icon iconName={iconName} />}
            <Message>{message}</Message>
            <Actions>{renderActions()}</Actions>
        </Wrapper>
    );
}

export default Empty;
