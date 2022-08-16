import React, { useCallback } from 'react';
import { Container } from './TagsInput.style';
import Creatable from 'react-select/creatable';
import { Options } from 'react-select';

export type TagsInputProps = {
    value?: any[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    options: Options<any>;
    onBlur?: () => void;
};

export function TagsInput(props: TagsInputProps) {
    const { options, value, placeholder } = props;

    const onChange = useCallback((options: Options<any>) => {
        const newValues = options.map((option) => option.value);
        props.onChange(newValues);
    }, []);

    return (
        <Container
            className='TagsInput-container'
            data-testid='TagsInput-container'
        >
            <Creatable
                isMulti
                options={options}
                onChange={onChange}
                value={value}
                onBlur={props.onBlur}
                placeholder={placeholder}
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
}

export default TagsInput;
