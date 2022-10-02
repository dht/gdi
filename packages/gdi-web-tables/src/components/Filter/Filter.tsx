import React from 'react';
import { Container, Title, Item, Items, A, X } from './Filter.style';
import classnames from 'classnames';
import { Icon } from '@gdi/web-base-ui';

export type FilterProps = {
    filter: IFilterField;
    value: string[];
    onClick: (optionId: string) => void;
    onRemove: (optionId: string) => void;
    onSet?: (newValue: []) => void;
};

export function Filter(props: FilterProps) {
    const { filter, value = [] } = props;
    const { title, options = [] } = filter;

    function renderOption(option: IFilterOption) {
        const { text } = option;

        const isSelected = value.includes(option.id);

        const className = classnames('option', {
            selected: isSelected,
        });

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
        <Container className='Filter-container' data-testid='Filter-container'>
            <Title>{title}</Title>
            <Items>{renderOptions()}</Items>
        </Container>
    );
}

export default Filter;
