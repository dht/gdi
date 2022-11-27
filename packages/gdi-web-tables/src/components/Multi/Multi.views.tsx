import React from 'react';
import Draggable from 'react-draggable';
import { ContainerViews } from './Multi.style';
import { Switch } from '@gdi/web-base-ui';
import { useFunctionKeys } from '@gdi/hooks';
import { useMemo, useRef } from '@gdi/hooks';

export type MultiViewsProps = {
    value: string;
    modes?: IViewMode[];
    customViewExists: boolean;
    customView2Exists: boolean;
    onChange: (option: IOption) => void;
};

export function MultiViews(props: MultiViewsProps) {
    const { modes = defaultModes, customViewExists, customView2Exists } = props;
    const ref = useRef<HTMLDivElement>(null);
    const { value } = props;

    const viewsModes = useMemo(() => {
        return modes
            .map((mode, index) => ({
                id: mode,
                iconName: icons[mode],
                hint: `${mode} (${keys[index]})`,
                key: keys[index],
                text: '',
            }))
            .filter((i) => i.id !== 'custom' || customViewExists)
            .filter((i) => i.id !== 'custom2' || customView2Exists);
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

    if (viewsModes.length === 1) {
        return null;
    }

    const Cmp: any = Draggable;

    return (
        <Cmp nodeRef={ref}>
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
        </Cmp>
    );
}

export default MultiViews;

const icons: Record<IViewMode, string> = {
    table: 'table_rows',
    gallery: 'grid_view',
    spreadsheet: 'grid_on',
    timeline: 'view_timeline',
    calendar: 'calendar_month',
    buckets: 'clear_all',
    custom: 'view_in_ar',
    custom2: 'dynamic_feed',
};

const keys: string[] = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6'];

const defaultModes: IViewMode[] = [
    'table',
    'gallery',
    'spreadsheet',
    'timeline',
    'calendar',
    'buckets',
    'custom',
    'custom2',
];
