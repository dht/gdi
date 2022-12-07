import React, { useCallback, useMemo } from 'react';
import Switcher from '../components/Switcher/Switcher';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';
import { actions } from '../store';

export const SwitcherContainer = () => {
    const dispatch = useDispatch();
    const studioState = useSelector(selectors.raw.$rawStudioState);
    const boards = useSelector(selectors.base.$relevantBoards) as any[];

    const options = useMemo(() => {
        return Object.values(boards).map((board) => ({
            id: board.id,
            text: board.name,
        }));
    }, [boards]);

    const onChange = useCallback((option: IOption) => {
        dispatch(
            actions.appStateStudio.patch({
                currentBoardId: option.id,
            })
        );
    }, []);

    return (
        <Switcher
            value={studioState.currentBoardId}
            options={options}
            onChange={onChange}
        />
    );
};

export default SwitcherContainer;
