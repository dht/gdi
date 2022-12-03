import React from 'react';
import { Wrapper, Title, Item, Items, A, X } from './Sort.style';
import classnames from 'classnames';
import { Icon } from '@gdi/web-base-ui';

export type SortProps = {
    value: ISortValue;
    sort: ISortOption[];
    onClick: (optionId: string) => void;
    onRemove: (optionId: string) => void;
};

export function Sort(props: SortProps) {
    const { value, sort = [] } = props;
    const { id, direction } = value;

    function renderDirection() {
        const iconName = direction === 'asc' ? 'ChevronUp' : 'ChevronDown';

        return <Icon iconName={iconName} />;
    }

    function renderOption(option: ISortOption) {
        const { text } = option;

        const isSelected = option.id === id;

        const className = classnames('option', {
            selected: isSelected,
        });

        return (
            <Item key={option.id} className={className}>
                <A onClick={() => props.onClick(option.id)}>{text}</A>
                {isSelected && (
                    <>
                        {renderDirection()}
                        <X onClick={() => props.onRemove(option.id)}>
                            <Icon iconName='Cancel' />
                        </X>
                    </>
                )}
            </Item>
        );
    }

    function renderOptions() {
        return sort.map((option) => renderOption(option));
    }

    return (
        <Wrapper className='Sort-wrapper' data-testid='Sort-wrapper'>
            <Title>Sort by</Title>
            <Items>{renderOptions()}</Items>
        </Wrapper>
    );
}

export default Sort;
