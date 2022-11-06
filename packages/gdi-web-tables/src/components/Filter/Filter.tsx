import React from 'react';
import {
    Container,
    Title,
    Item,
    Items,
    A,
    X,
    ContainerTags,
} from './Filter.style';
import classnames from 'classnames';
import { Icon } from '@gdi/web-base-ui';
import { AutoComplete } from '@gdi/web-ui';

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
        <Container className='Filter-container' data-testid='Filter-container'>
            <Title>{title}</Title>
            <Items>{renderOptions()}</Items>
        </Container>
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
        <ContainerTags
            className='Filter-container'
            data-testid='Filter-container'
        >
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
