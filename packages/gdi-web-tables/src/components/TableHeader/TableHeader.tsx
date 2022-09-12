import React, { useContext, useRef } from 'react';
import { ITableConfig, ITableField } from '../../types';
import { Container, Th } from './TableHeader.style';
import { useMount } from 'react-use';
import { TableContext } from '../Table/Table.context';

export type TableHeaderProps = {
    config: ITableConfig;
};

export function TableHeader(props: TableHeaderProps) {
    const { config } = props;
    const ref = useRef<HTMLDivElement>(null);
    const context = useContext(TableContext);

    useMount(() => {
        if (!ref.current) {
            return;
        }
        const elements = [...ref.current.querySelectorAll('.th')];

        const widths = elements.map((el) => {
            const box = el.getBoundingClientRect();
            return box.width;
        });

        context.patchState({ widths });
    });

    function renderTh(field: ITableField) {
        const { title, flex = 1 } = field;

        const style = {
            flex,
        };

        return (
            <Th key={field.id} className='th' style={style}>
                {title}
            </Th>
        );
    }

    function renderThs() {
        return config.fields.map((field: ITableField) => renderTh(field));
    }

    return (
        <Container
            className='TableHeader-container'
            data-testid='TableHeader-container'
            ref={ref}
        >
            {renderThs()}
        </Container>
    );
}

export default TableHeader;
