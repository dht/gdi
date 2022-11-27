import React, { useCallback } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import {
    Action,
    Actions,
    Column,
    Container,
    Divider,
    H2,
    Header,
    Item,
    Items,
    Label,
    Subtitle,
    Title,
} from './Checkboxes.style';

export type CheckboxesProps = {
    id: string;
    groups: Json[];
    options: IOption[];
    onChange: (value: Json) => void;
    values: Json;
};

export function Checkboxes(props: CheckboxesProps) {
    const { id, groups, options, values } = props;

    const onCheck = useCallback(
        (id: string, check: boolean) => {
            props.onChange({
                ...values,
                [id]: check,
            });
        },
        [values]
    );

    const onAll = useCallback(
        (groupId: string) => {
            const change = options
                .filter((i) => i.groupId === groupId)
                .reduce((acc, item: IOption) => {
                    acc[item.id] = true;
                    return acc;
                }, {});

            props.onChange({
                ...values,
                ...change,
            });
        },
        [values]
    );

    const onNone = useCallback(
        (groupId: string) => {
            const change = options
                .filter((i) => i.groupId === groupId)
                .reduce((acc, item: IOption) => {
                    acc[item.id] = false;
                    return acc;
                }, {});

            props.onChange({
                ...values,
                ...change,
            });
        },
        [values]
    );

    function renderItem(item: IOption) {
        const { id, text, secondaryText, disabled } = item;

        const value = (values ?? {})[id];

        return (
            <Item key={item.id} disabled={disabled}>
                <Checkbox
                    onChange={(_ev, checked) => onCheck(item.id, checked)}
                    value={disabled ? false : value}
                    disabled={disabled}
                >
                    <Label>
                        <Title>{text}</Title>
                        <Subtitle>{secondaryText}</Subtitle>
                    </Label>
                </Checkbox>
            </Item>
        );
    }

    function renderItems(groupId: string) {
        return options
            .filter((i) => i.groupId === groupId)
            .map((item: IOption) => renderItem(item));
    }

    function renderGroup(group: Json) {
        const { id, title } = group;

        return (
            <Column key={group.id} className='group'>
                <Header>
                    <H2>{title}</H2>
                    <Actions>
                        <Action onClick={() => onAll(group.id)}>All</Action>
                        <Divider />
                        <Action onClick={() => onNone(group.id)}>None</Action>
                    </Actions>
                </Header>
                <Items>{renderItems(id)}</Items>
            </Column>
        );
    }

    function renderGroups() {
        return groups.map((group: any) => renderGroup(group));
    }

    return (
        <Container
            className='Checkboxes-container'
            data-testid='Checkboxes-container'
        >
            {renderGroups()}
        </Container>
    );
}

export default Checkboxes;
