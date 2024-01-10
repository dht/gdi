import { IBarItem, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Monitor } from './Monitor';

export type MonitorContainerProps = {};

export function MonitorContainer(_props: MonitorContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);
    const barItems = useSelector(selectors.bar.$barItems);

    const { prompt, promptPlaceholder, is24Hours } = appState;

    const onPrompt = (value: string) => {
        dispatch({ type: 'PROMPT', prompt: value });
    };

    const onItemClick = (barItem: IBarItem) => {
        const { id } = barItem;
        dispatch({ type: 'BAR', verb: id });
    };

    return <Monitor />;
}

export default MonitorContainer;
