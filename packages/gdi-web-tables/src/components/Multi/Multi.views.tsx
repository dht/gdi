import React, { useMemo, useRef } from 'react';
import { Switch } from '@gdi/web-base-ui';
import { ContainerViews } from './Multi.style';
import Draggable from 'react-draggable';
import { useFunctionKeys } from '@gdi/hooks';

export type MultiViewsProps = {
    value: string;
    onChange: (option: SwitchOption) => void;
};

export function MultiViews(props: MultiViewsProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { value } = props;

    const filteredOptions = options;

    useFunctionKeys(
        (shortKey: IShortKey) => {
            const option = filteredOptions.find(
                (option) => option.key === shortKey.key
            );
            if (option) {
                props.onChange(option);
            }
        },
        [filteredOptions]
    );

    return (
        <Draggable nodeRef={ref}>
            <ContainerViews
                className='MultiViews-container'
                data-testid='Multi-container'
                ref={ref}
            >
                <Switch
                    value={value}
                    options={filteredOptions}
                    onChange={props.onChange}
                    vertical={true}
                />
            </ContainerViews>
        </Draggable>
    );
}

export default MultiViews;

const options = [
    {
        id: 'table',
        iconName: 'table_rows',
        key: 'F1',
    },
    {
        id: 'gallery',
        iconName: 'grid_view',
        key: 'F2',
    },
    {
        id: 'spreadsheet',
        iconName: 'grid_on',
        key: 'F3',
    },
    {
        id: 'timeline',
        iconName: 'view_timeline',
        key: 'F4',
    },
    {
        id: 'calendar',
        iconName: 'calendar_month',
        key: 'F5',
    },
    {
        id: 'custom',
        iconName: 'view_in_ar',
        key: 'F6',
    },
];
