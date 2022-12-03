import React, { useCallback, useMemo } from 'react';
import { Wrapper } from './AutoComplete.style';
import Creatable from 'react-select/creatable';
import { Options } from 'react-select';

export type AutoCompleteProps = {
    value?: string[];
    onChange: (value: string, isNew?: boolean) => void;
    placeholder?: string;
    options: Options<any>;
    onBlur?: () => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const AutoComplete = React.forwardRef(
    (props: AutoCompleteProps, ref: any) => {
        const { options = [], value, placeholder } = props;

        const optionsParsed = useMemo(() => {
            return options.map((option) => {
                const { id, text } = option;

                return {
                    value: id,
                    label: text,
                };
            });
        }, [options]);

        const onChange = useCallback((option: any) => {
            props.onChange(option.value, option['__isNew__']);
        }, []);

        return (
            <Wrapper
                className='AutoComplete-wrapper'
                data-testid='AutoComplete-wrapper'
            >
                <Creatable
                    ref={ref}
                    options={optionsParsed as any}
                    onChange={onChange}
                    value={value}
                    onBlur={props.onBlur}
                    placeholder={placeholder}
                    onKeyDown={props.onKeyDown}
                    classNamePrefix='rs'
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
            </Wrapper>
        );
    }
);

export default AutoComplete;
