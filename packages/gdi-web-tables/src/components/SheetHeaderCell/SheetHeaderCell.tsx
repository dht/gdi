import React, { useContext } from 'react';
import { Wrapper, Row, Title } from './SheetHeaderCell.style';
import { Icon } from '@gdi/web-base-ui';
import { SheetContext } from '../../context/Sheet.context';

export type SheetHeaderCellProps = {
    field: IFormField;
};
type Order = 'asc' | 'desc' | 'none';

const orderMap: Record<Order, Order> = {
    asc: 'desc',
    desc: 'none',
    none: 'asc',
};

const orderIcons: Record<Order, string> = {
    asc: 'ChevronDown',
    desc: 'ChevronUp',
    none: '',
};

export function SheetHeaderCell(props: SheetHeaderCellProps) {
    const { field } = props;
    const { label } = field;
    const context = useContext(SheetContext);

    function onClick() {
        if (context.sortBy === field.id) {
            const nextOrder = orderMap[context.sortOrder];
            context.patchState({
                sortOrder: nextOrder,
            });
        } else {
            context.patchState({
                sortBy: field.id,
                sortOrder: 'asc',
            });
        }
    }

    const showOrderIcon = context.sortBy === field.id;
    const iconName = orderIcons[context.sortOrder];

    return (
        <Wrapper
            className='SheetHeaderCell-wrapper'
            data-testid='SheetHeaderCell-wrapper'
            onClick={onClick}
        >
            <Row>
                <Title>{label}</Title>
                {showOrderIcon && <Icon iconName={iconName} />}
            </Row>
        </Wrapper>
    );
}

export default SheetHeaderCell;
