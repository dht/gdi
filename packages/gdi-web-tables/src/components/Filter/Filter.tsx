import React from 'react';
import {
    Wrapper,
    Title,
    Item,
    Items,
    A,
    X,
    ContainerTags,
} from './Filter.style';
import classnames from 'classnames';
import { AutoComplete, Icon } from '@gdi/web-base-ui';

export type FilterProps = {
    filter: IFilterField;
    value: string[];
    onClick: (optionId: string) => void;
    onRemove: (optionId: string) => void;
};

export function Filter(props: FilterProps) {
    const { filter, value = [] } = props;
    const { title, options = [], cellType } = filter;

    if (cellType === 'tags') {
        return <FilterTags {...props} />;
    }

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
        <Wrapper className='Filter-wrapper' data-testid='Filter-wrapper'>
            <Title>{title}</Title>
            <Items>{renderOptions()}</Items>
        </Wrapper>
    );
}

export function FilterTags(props: FilterProps) {
    const { filter, value = [] } = props;
    const { title, options = [] } = filter;

    function onChange(newValue: string, _isNew?: boolean) {
        props.onClick(newValue);
    }

    function renderValue(tag: string) {
        const className = classnames('option', {
            selected: true,
        });

        return (
            <Item key={tag} className={className}>
                <A onClick={() => props.onClick(tag)}>{tag}</A>
                <X onClick={() => props.onRemove(tag)}>
                    <Icon iconName='Cancel' />
                </X>
            </Item>
        );
    }

    function renderValues() {
        return value.map((tag: string) => renderValue(tag));
    }

    return (
        <ContainerTags className='Filter-wrapper' data-testid='Filter-wrapper'>
            <Title>{title}</Title>
            <AutoComplete
                placeholder=''
                options={options}
                value={[]}
                onChange={onChange}
            />
            <Items>{renderValues()}</Items>
        </ContainerTags>
    );
}

export default Filter;
