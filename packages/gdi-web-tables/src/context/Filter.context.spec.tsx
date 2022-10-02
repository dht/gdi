import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterBar from '../components/FilterBar/FilterBar';
import { CalendarContext } from './Calendar.context';

describe.only('Filter.context', () => {
    it('123', () => {
        const providerProps = {
            value: 'C3PO',
        };
        customRender(<NameConsumer />, { providerProps });
        expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
            'My Name Is: C3P0'
        );
    });
});

const customRender = (ui: JSX.Element, props: Json) => {
    return render(
        <CalendarContext.Provider {...props}>{ui}</CalendarContext.Provider>,
        {}
    );
};
