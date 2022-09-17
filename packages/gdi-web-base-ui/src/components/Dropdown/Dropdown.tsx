import {
    DropdownMenuItemType,
    IDropdownOption,
    Dropdown as DropdownFluent,
} from '@fluentui/react';
import * as React from 'react';
import { Container } from './Dropdown.style';

type IOption = {
    key: string;
    text: string;
    isHeader?: boolean;
    isDisabled?: boolean;
};

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
                key: option.key,
                text: option.text,
                disabled: option.isDisabled,
                itemType: option.isHeader
                    ? DropdownMenuItemType.Header
                    : DropdownMenuItemType.Normal,
            };
        });
    }, [options]);

    return (
        <Container
            className='Dropdown-container'
            data-testid='Dropdown-container'
        >
            <DropdownFluent
                placeholder={placeholder}
                label={label}
                options={fluentOptions}
                selectedKey={value}
                onChange={onChange}
                onKeyDown={props.onKeyDown}
            />
        </Container>
    );
});

export default Dropdown;
