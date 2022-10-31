import { DatePicker, defaultDatePickerStrings } from '@fluentui/react';
import * as React from 'react';
import { Container } from './DateInput.style';
import { dateShort } from '@gdi/language';

export type DateProps = {
    firstDayOfWeek?: number;
    placeholder?: string;
    ariaLabel?: string;
    onChange: (date?: Date | null) => void;
    onBlur?: () => void;
    value?: Date;
};

export const DateInput = React.forwardRef((props: DateProps, ref: any) => {
    const { value, firstDayOfWeek, placeholder, ariaLabel } = props;

    function parseDateFromString(dateString: string) {
        const parts = dateString.split('/').map((i) => parseInt(i, 10));
        const now = new Date();
        now.setDate(parts[0]);
        now.setMonth(parts[1] - 1);
        now.setFullYear(parts[2]);
        return now;
    }

    function formatDate(date: Date) {
        try {
            return dateShort(date);
        } catch (err) {
            return '';
        }
    }

    return (
        <Container className='DateInput-container' data-testid='Date-container'>
            <DatePicker
                firstDayOfWeek={firstDayOfWeek}
                showWeekNumbers={true}
                allowTextInput={true}
                onBlur={props.onBlur}
                formatDate={(date?: Date) => (date ? formatDate(date) : '')}
                parseDateFromString={parseDateFromString}
                placeholder={placeholder}
                ariaLabel={ariaLabel}
                strings={defaultDatePickerStrings}
                onSelectDate={props.onChange}
                value={value}
            />
        </Container>
    );
});

export default DateInput;
