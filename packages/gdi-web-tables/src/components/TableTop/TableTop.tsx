import React, { useCallback, useContext } from 'react';
import { TableContext } from '../Table/Table.context';
import { Action, Actions, Container, Count, H1, Row } from './TableTop.style';

export type TableTopProps = {
    config: ITableConfig;
    onAction: (actionType: string) => void;
    data: Json[];
    header?: string;
};

export function TableTop(props: TableTopProps) {
    const { config, data = [] } = props;
    const { header, tableActions = [] } = config;
    const context = useContext(TableContext);

    const toggleFilters = useCallback(() => {
        context.patchState({
            showFilters: !context.showFilters,
        });
    }, [context.showFilters]);

    function renderAction(tableAction: ITableAction) {
        const { id, iconName, title } = tableAction;

        return (
            <Action
                key={id}
                onClick={() => props.onAction(id)}
                className='material-icons'
                title={title}
            >
                {iconName}
            </Action>
        );
    }

    function renderActions() {
        return (
            <Actions>
                {tableActions.map((tableAction: ITableAction) =>
                    renderAction(tableAction)
                )}
            </Actions>
        );
    }

    return (
        <Container
            className='TableTop-container'
            data-testid='TableTop-container'
        >
            <Row>
                <H1>{props.header || header}</H1>
                <Count>{data.length} items locally</Count>

                {renderActions()}
            </Row>
        </Container>
    );
}

export default TableTop;
