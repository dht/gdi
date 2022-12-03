import React from 'react';
import { Button, Wrapper, Item } from './Choice.style';
import classnames from 'classnames';
import { useKey } from 'react-use';
import { useEnter } from '@gdi/hooks';
import { Icon } from '@fluentui/react';

export type ChoiceProps = {
    value?: string;
    options: IOption[];
    onChange: (value: string, isNew?: boolean) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
};

export function Choice(props: ChoiceProps) {
    const { value, options } = props;

    function renderOption(option: IOption) {
        const { id, text, iconName } = option;

        const className = classnames({
            selected: value === id,
        });

        return (
            <Item key={id}>
                <Button
                    onClick={() => props.onChange(id)}
                    className={className}
                >
                    <Icon iconName={iconName} className='icon' />
                    {text}
                </Button>
            </Item>
        );
    }

    function renderOptions() {
        return options.map((option: IOption) => renderOption(option));
    }

    return (
        <Wrapper className='Choice-wrapper' data-testid='Choice-wrapper'>
            {renderOptions()}
        </Wrapper>
    );
}

export default Choice;
