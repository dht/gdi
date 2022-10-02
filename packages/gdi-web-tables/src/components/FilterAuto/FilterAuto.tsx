import React, { useMemo } from 'react';
import { Container, Title, Item, Items, A, X } from './FilterAuto.style';
import classnames from 'classnames';
import { Button, Dropdown, Icon } from '@gdi/web-base-ui';

export type FilterAutoProps = {
    filter: IFilterField;
    value: string[];
    onClick: (optionId: string) => void;
    onRemove: (optionId: string) => void;
};

export function FilterAuto(props: FilterAutoProps) {
    const { filter, value = [] } = props;
    const { title, options = [] } = filter;

    const optionsForDropdown = useMemo(() => {
        return options.map((option) => ({
            value: option.id,
            label: option.text,
        }));
    }, []);

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
        <Container
            className='FilterAuto-container'
            data-testid='Filter-container'
        >
            <Title>{title}</Title>
            <Items>{renderOptions()}</Items>
            <Button title='go' onClick={() => props.onClick('Alex Miller')} />
            <Dropdown
                options={optionsForDropdown}
                onChange={(optionId?: string) => props.onClick(optionId || '')}
            />
        </Container>
    );
}

export default FilterAuto;
