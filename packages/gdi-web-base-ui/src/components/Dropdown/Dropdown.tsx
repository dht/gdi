import React, { useMemo } from 'react';
import { Container } from './Dropdown.style';
import Select from 'react-select';

export type DropdownProps = {
    options: IOption[];
    label?: string;
    placeholder?: string;
    value?: string;
    isMulti?: boolean;
    onChange: (newValue?: string) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Dropdown = React.forwardRef((props: DropdownProps, ref: any) => {
    const { options = [], placeholder, value, isMulti } = props;

    const onChange = React.useCallback((newValue?: any) => {
        if (newValue && newValue.value) {
            props.onChange(newValue.value);
        } else {
            props.onChange('');
        }
    }, []);

    const optionsParsed = useMemo(() => {
        return options.map((option) => ({
            value: option.id,
            label: option.text,
        }));
    }, [options]);

    return (
        <Container
            className='Dropdown-container'
            data-testid='Dropdown-container'
        >
            <Select
                placeholder={placeholder}
                defaultValue={value}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isMulti={isMulti}
                isRtl={false}
                isSearchable={true}
                options={optionsParsed as any}
                onChange={onChange}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        danger: '#DE350B',
                        dangerLight: '#FFBDAD',
                        neutral90: 'hsl(0, 0%, 100%)',
                        neutral80: 'hsl(0, 0%, 95%)',
                        neutral70: 'hsl(0, 0%, 90%)',
                        neutral60: 'hsl(0, 0%, 80%)',
                        neutral50: 'hsl(0, 0%, 70%)',
                        neutral40: 'hsl(0, 0%, 60%)',
                        neutral30: 'hsl(0, 0%, 50%)',
                        neutral20: 'hsl(0, 0%, 40%)',
                        neutral10: 'hsl(0, 0%, 30%)',
                        neutral5: 'hsl(0, 0%, 20%)',
                        neutral0: '#112',
                        primary: '#2684FF',
                        primary75: '#DEEBFF',
                        primary50: '#B2D4FF',
                        primary25: '#4C9AFF',
                    },
                })}
            />
        </Container>
    );
});

export default Dropdown;
