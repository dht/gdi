import React, { useMemo } from 'react';
import TicketsTable from '../components/TicketsTable/TicketsTable';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const TicketsTableContainer = () => {
    return <TicketsTable height={500} selector={selectors.tables.$tickets} />;
};

export default TicketsTableContainer;
