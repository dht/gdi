import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from '../components/Calendar/Calendar';

describe.only('Calendar.context', () => {
    it('123', () => {
        render(<Calendar />);
        expect(screen.getByText(/^Calendar/)).toHaveTextContent('Calendar');
    });
});
