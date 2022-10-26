import React from 'react';
import Mini from '../../components/Mini/Mini';
import { selectors } from '../../store';
import { useSelectorInterval } from '../../hooks/useSelectorInterval';

export const MiniContainer = () => {
    const activeTask = useSelectorInterval(
        selectors.base.$activeTaskNonMemoized
    );

    return <Mini activeTask={activeTask} />;
};
