import React, { useMemo } from 'react';
import { BigAutoComplete } from '@gdi/web-ui';
import { useDispatch, useSelector } from 'react-redux';
import { selectorsTasks } from '../store';
import { byField } from '../utils/sort';

export const ScheduleCommandBarContainer = () => {
    const dispatch = useDispatch();
    const options = useSelector(
        selectorsTasks.options.$ticketsAndProjectsOptions
    );

    function onRun(command: any) {
        dispatch({
            type: 'SCHEDULE_ATTACH_TICKET_TO_BLOCK',
            id: command.id,
        });
    }

    return <BigAutoComplete items={options as any[]} onRun={onRun} />;
};

export default ScheduleCommandBarContainer;
