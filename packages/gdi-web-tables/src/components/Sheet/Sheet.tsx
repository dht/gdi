import React from 'react';
import {
    SheetContext,
    SheetContextProvider,
} from '../../context/Sheet.context';
import SheetHeader from '../SheetHeader/SheetHeader';
import SheetRow from '../SheetRow/SheetRow';
import { Body, Wrapper } from './Sheet.style';
import { useContext, useEffect, useMemo } from '@gdi/hooks';

export type SheetProps = {
    config: ISheetConfig;
    data: Json[];
    allOptions?: Json;
    onChange: (itemId: string, change: Json) => void;
    onDelete: (itemId: string) => void;
    onNew: (data: Json) => void;
    children?: JSX.Element;
};

export function SheetInner(props: SheetProps) {
    const context = useContext(SheetContext);
    const { config, data } = props;
    const { fields } = config;

    useEffect(() => {
        const lastRowIndex = data.length;
        const lastColumnIndex = fields.length - 1;

        context.patchState({
            lastCoords: {
                rowIndex: lastRowIndex,
                columnIndex: lastColumnIndex,
            },
        });
    }, [data]);

    function renderRow(rowData: Json, index: number) {
        return (
            <SheetRow
                key={rowData.id + index}
                rowData={rowData}
                cells={fields}
                rowIndex={index}
                isSelected={context.selectedRowIndex === index}
            />
        );
    }

    function renderRows() {
        return data.map((rowData: Json, index) => renderRow(rowData, index));
    }

    return (
        <Wrapper className='Sheet-wrapper' data-testid='Sheet-wrapper'>
            <SheetHeader cells={fields} />
            <Body
                onMouseDown={context.onMouseDown}
                onTouchStart={context.onMouseDown as any}
                onDoubleClick={context.onDoubleClick}
            >
                {renderRows()}
                <SheetRow
                    key={'<NEW>'}
                    rowData={{ id: '*' }}
                    cells={fields}
                    rowIndex={data.length}
                />
            </Body>
        </Wrapper>
    );
}

export function Sheet(props: SheetProps) {
    return <SheetContextProvider {...props} inner={SheetInner} />;
}

export default Sheet;
