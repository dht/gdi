import React, { useCallback, useContext } from 'react';
import { Action, Actions, Container, Count, H1, Row } from './TableTop.style';
import { DataGridContext } from '../DataGrid.context';

export type TableTopProps = {};

export function TableTop(_props: TableTopProps) {
    const context = useContext(DataGridContext);

    const toggleFilters = useCallback(() => {
        context.patchState({
            showFilters: !context.showFilters,
        });
    }, [context.showFilters]);

    return (
        <Container
            className='TableTop-container'
            data-testid='TableTop-container'
        >
            <Row>
                <H1>People</H1>
                <Count>32 items locally</Count>
                <Actions>
                    <Action
                        isOn={context.showFilters}
                        onClick={toggleFilters}
                        className='material-icons'
                    >
                        filter_alt
                    </Action>
                </Actions>
            </Row>
        </Container>
    );
}

export default TableTop;
