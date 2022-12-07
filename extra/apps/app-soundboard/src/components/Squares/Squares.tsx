import React, { useCallback, useMemo } from 'react';
import { Wrapper, Anim } from './Squares.style';
import { GenericTable } from '@gdi/web-ui';
import Week from '../Week/Week';

export type SquaresProps = {
    weeks: WeekPointer[];
    expectedManasByProject: GroupedMana;
};

export function Squares(props: SquaresProps) {
    const { weeks, expectedManasByProject } = props;

    function row(data: any) {
        const weekPointer: WeekPointer = data.item;
        const weekData =
            expectedManasByProject.byWeek[weekPointer.weekAndYear ?? ''];

        return (
            <Week
                key={weekPointer.weekAndYear}
                weekData={weekData}
                weekPointer={weekPointer}
            />
        );
    }

    return (
        <Wrapper className='Squares-wrapper' data-testid='Squares-wrapper'>
            <GenericTable data={weeks} autoHeight itemHeight={131}>
                {row}
            </GenericTable>
        </Wrapper>
    );
}

export default Squares;
