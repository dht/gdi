import React from 'react';
import { Wrapper, Title, Item, Items, A, X } from './FilterAuto.style';
import classnames from 'classnames';
import { Button, Dropdown, Icon } from '@gdi/web-base-ui';
import { useMemo } from '@gdi/hooks';

export type FilterAutoProps = {
    filter: IFilterField;
    value: string[];
    onClick: (optionId: string) => void;
    onRemove: (optionId: string) => void;
};

export function FilterAuto(props: FilterAutoProps) {
    const { filter, value = [] } = props;
    const { title, options = [] } = filter;

    function renderOption(option: IFilterOption) {
        const { text } = option;

        const isSelected = value.includes(option.id);

        const className = classnames('option', {
            selected: isSelected,
        });

        if (!isSelected) {
            return null;
        }

        return (
            <Item key={option.id} className={className}>
                <A onClick={() => props.onClick(option.id)}>{text}</A>

                {isSelected && (
                    <X onClick={() => props.onRemove(option.id)}>
                        <Icon iconName='Cancel' />
                    </X>
                )}
            </Item>
        );
    }

    function renderOptions() {
        return options.map((option: IFilterOption) => renderOption(option));
    }

    return (
        <Wrapper className='FilterAuto-wrapper' data-testid='Filter-wrapper'>
            <Title>{title}</Title>
            <Items>{renderOptions()}</Items>
            <Button title='go' onClick={() => props.onClick('Alex Miller')} />
            <Dropdown
                options={options}
                onChange={(optionId?: string) => props.onClick(optionId ?? '')}
            />
        </Wrapper>
    );
}

export default FilterAuto;
