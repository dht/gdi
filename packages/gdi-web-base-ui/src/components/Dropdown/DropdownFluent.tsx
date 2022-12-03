import {
    DropdownMenuItemType,
    IDropdownOption,
    Dropdown as DropdownFluent,
} from '@fluentui/react';
import * as React from 'react';
import { Wrapper } from './Dropdown.style';

export type DropdownProps = {
    options: IOption[];
    label?: string;
    placeholder?: string;
    value?: string;
    onChange: (newValue: string) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Dropdown = React.forwardRef((props: DropdownProps, ref: any) => {
    const { options = [], placeholder, label = '', value } = props;

    const onChange = React.useCallback(
        (
            _event: React.FormEvent<HTMLDivElement>,
            option?: IDropdownOption,
            _index?: number
        ) => {
            if (option) {
                props.onChange(String(option.key));
            }
        },
        []
    );

    const fluentOptions = React.useMemo((): IDropdownOption[] => {
        return options.map((option) => {
            return {
                key: option.id,
                text: option.text,
                itemType: DropdownMenuItemType.Normal,
            };
        });
    }, [options]);

    return (
        <Wrapper className='Dropdown-wrapper' data-testid='Dropdown-wrapper'>
            <DropdownFluent
                placeholder={placeholder}
                label={label}
                options={fluentOptions}
                selectedKey={value}
                onChange={onChange}
                onKeyDown={props.onKeyDown}
            />
        </Wrapper>
    );
});

export default Dropdown;
