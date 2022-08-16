import React from 'react';
import { Container, ContainerIcon, Item } from './List.style';
import classnames from 'classnames';
import { Icon } from '@gdi/web-base-ui';

type Option = Json & {
    id: string;
};

export type ListProps = {
    options: Option[];
    selectedOptionId?: string;
    renderItem: (option: Option, selected: boolean) => JSX.Element;
    onSelect: (id: string) => void;
};

export function List(props: ListProps) {
    const { options = [], selectedOptionId } = props;

    function renderOption(option: Option) {
        const { id, fontFamily } = option;

        const style = {
            fontFamily,
        };

        const selected = selectedOptionId === id;

        const className = classnames('option', {
            selected,
        });

        return (
            <Item
                key={id}
                className={className}
                style={style}
                onClick={() => props.onSelect(id)}
            >
                <SelectedIcon />
                {props.renderItem(option, selected)}
            </Item>
        );
    }

    function renderOptions() {
        return options.map((option) => renderOption(option));
    }

    return (
        <Container className='List-container' data-testid='List-container'>
            {renderOptions()}
        </Container>
    );
}

function SelectedIcon() {
    return (
        <ContainerIcon className='ok-icon'>
            <Icon iconName='CheckMark' />
        </ContainerIcon>
    );
}

export default List;
