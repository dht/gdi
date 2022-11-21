import React, { useEffect, useRef } from 'react';
import Console from '../components/Console/Console';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { useLogs } from '../utils/console';
import { useCustomEvent } from '@gdi/hooks';

export const ConsoleContainer = () => {
    const logs = useLogs();

    return <Console logs={logs} />;
};
