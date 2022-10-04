import React, { useMemo, useRef } from 'react';
import Draggable from 'react-draggable';
import { ContainerViews } from './Multi.style';
import { Switch } from '@gdi/web-base-ui';
import { useFunctionKeys } from '@gdi/hooks';

export type MultiViewsProps = {
    value: string;
    modes?: IViewMode[];
    onChange: (option: SwitchOption) => void;
};

export function MultiViews(props: MultiViewsProps) {
    const { modes = defaultModes } = props;
    const ref = useRef<HTMLDivElement>(null);
    const { value } = props;

    const viewsModes = useMemo(() => {
        return modes.map((mode, index) => ({
            id: mode,
            iconName: icons[mode],
            key: keys[index],
        }));
    }, [modes]);

    useFunctionKeys(
        (shortKey: IShortKey) => {
            if (shortKey.key === 'F2' && value === 'spreadsheet') {
                return;
            }

            const option = viewsModes.find(
                (option) => option.key === shortKey.key
            );
            if (option) {
                props.onChange(option);
            }
        },
        [viewsModes, value]
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
                    options={viewsModes}
                    onChange={props.onChange}
                    vertical={true}
                />
            </ContainerViews>
        </Draggable>
    );
}

export default MultiViews;

const icons: Record<IViewMode, string> = {
    table: 'table_rows',
    gallery: 'grid_view',
    spreadsheet: 'grid_on',
    timeline: 'view_timeline',
    calendar: 'calendar_month',
    custom: 'view_in_ar',
};

const keys: string[] = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6'];

const defaultModes: IViewMode[] = [
    'table',
    'gallery',
    'spreadsheet',
    'timeline',
    'calendar',
    'custom',
];
