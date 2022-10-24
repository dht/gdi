import React, { FC, useEffect, useMemo, useState } from 'react';
import {
    AllDetails,
    AllMethods,
    FieldType,
    IFormField,
    LabelSize,
} from '../../types';
import { Container, PaddingTop } from './Field.style';
import { Label } from '../Label/Label';
import {
    DateInput as DateUI,
    Dropdown,
    ImageUpload,
    Input,
    InputHidden,
    PhoneInput,
    Slider,
    SpinButton,
    TagsInput,
    BarSelect,
    ColorPicker,
    Checkbox,
} from '@gdi/web-base-ui';
import { useController, Control, useFormContext } from 'react-hook-form';
import { sortBy } from '../../utils/sortBy';

export type FieldProps = {
    field: IFormField;
    control: Control;
    allOptions: Json;
    allDetails: AllDetails;
    allMethods: AllMethods;
    errorMessage?: string;
    labelSize?: LabelSize;
    onExtraChange: (change?: Json) => void;
    itemId?: string;
    external?: Json;
};

export function Field(props: FieldProps) {
    const { field, errorMessage, labelSize, itemId } = props;
    const { fieldType, label, description, isRequired } = field;

    const Cmp = map[fieldType];

    function renderLabel() {
        if (fieldType === 'hidden') {
            return null;
        }

        return (
            <Label
                value={label}
                description={description}
                isRequired={isRequired}
                errorMessage={errorMessage}
                size={labelSize}
            />
        );
    }

    return (
        <Container className='Field-container' data-testid='Field-container'>
            {renderLabel()}
            <Cmp {...props} />
        </Container>
    );
}

export default Field;

export function FieldDate(props: FieldProps) {
    const { field, control } = props;
    const { label, placeholder } = field;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    const valueDate = useMemo(() => {
        return new Date(fieldMethods.value);
    }, [fieldMethods.value]);

    return (
        <DateUI
            placeholder={placeholder}
            value={valueDate}
            onChange={fieldMethods.onChange}
            onBlur={fieldMethods.onBlur}
            ref={fieldMethods.ref}
        />
    );
}

export function FieldInput(props: FieldProps) {
    const { field, control } = props;
    const { label, placeholder } = field;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <Input
            placeholder={placeholder}
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            onBlur={fieldMethods.onBlur}
            ref={fieldMethods.ref}
        />
    );
}

export function FieldImageUpload(props: FieldProps) {
    const { field, control, allMethods, itemId, external = {} } = props;
    const { label, placeholder } = field;

    const { getValues } = useFormContext();

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    const values = getValues();
    const rawImage = `${field.id}Raw`;
    const rawValue = values[rawImage];

    function onChange(value: string, extra?: Json) {
        fieldMethods.onChange(value);
        props.onExtraChange(extra);
    }

    function onUpload(file: File) {
        return allMethods.onUpload(file, { itemId });
    }

    return (
        <ImageUpload
            value={fieldMethods.value}
            valueRaw={rawValue}
            destinationFolder={external.uploadDestinationFolder}
            onChange={onChange}
            onUpload={onUpload}
        />
    );
}

export function FieldDropdown(props: FieldProps) {
    const { field, control, allOptions } = props;
    const { label, placeholder, optionSelector } = field;

    const options = allOptions[optionSelector ?? ''];

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <Dropdown
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            placeholder={placeholder}
            options={options}
        />
    );
}

export function FieldNumber(props: FieldProps) {
    const { field, control } = props;
    const { params } = field;
    const { min, max, unit } = params ?? {};

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <SpinButton
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            min={min}
            max={max}
            suffix={unit}
        />
    );
}

export function FieldTags(props: FieldProps) {
    const { field, control, allOptions } = props;
    const { placeholder, optionSelector } = field;

    const options = allOptions[optionSelector ?? ''] ?? [];

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    const parsedOptions = useMemo(() => {
        return options
            .map((option: any) => {
                return {
                    value: option.key,
                    label: option.text,
                };
            })
            .sort(sortBy('label'));
    }, []);

    const parsedValue = useMemo(() => {
        return (fieldMethods.value ?? []).map((value: string) => ({
            value,
            label: value,
        }));
    }, [fieldMethods.value]);

    return (
        <TagsInput
            value={parsedValue}
            onChange={fieldMethods.onChange}
            onBlur={fieldMethods.onBlur}
            placeholder={placeholder}
            options={parsedOptions}
        />
    );
}

export function FieldSlider(props: FieldProps) {
    const { field, control } = props;
    const { label, placeholder, params } = field;
    const { min, max, step } = params ?? {};

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <Slider
            min={min}
            max={max}
            step={step}
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            onBlur={fieldMethods.onBlur}
            ref={fieldMethods.ref}
        />
    );
}

export function FieldParagraph(props: FieldProps) {
    const { field, control } = props;
    const { label, placeholder } = field;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <Input
            label={label}
            placeholder={placeholder}
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            onBlur={fieldMethods.onBlur}
            multiline={true}
            rows={5}
            ref={fieldMethods.ref}
        />
    );
}

export function FieldEmail(props: FieldProps) {
    const { field, control } = props;
    const { label, placeholder } = field;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <Input
            label={label}
            placeholder={placeholder}
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            onBlur={fieldMethods.onBlur}
            ref={fieldMethods.ref}
        />
    );
}

export function FieldHidden(props: FieldProps) {
    const { field, control } = props;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <InputHidden
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            ref={fieldMethods.ref}
        />
    );
}

export function FieldPhone(props: FieldProps) {
    const { field, control } = props;
    const { placeholder, params = {} } = field;
    const { defaultCountry } = params;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <PhoneInput
            placeholder={placeholder}
            value={fieldMethods.value}
            defaultCountry={defaultCountry}
            onChange={fieldMethods.onChange}
            ref={fieldMethods.ref}
        />
    );
}

export function FieldUrl(props: FieldProps) {
    const { field, control } = props;
    const { label, placeholder } = field;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <Input
            label={label}
            placeholder={placeholder}
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            onBlur={fieldMethods.onBlur}
            ref={fieldMethods.ref}
        />
    );
}

export function FieldPassword(props: FieldProps) {
    const { field, control } = props;
    const { label, placeholder } = field;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <Input
            label={label}
            placeholder={placeholder}
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            onBlur={fieldMethods.onBlur}
            ref={fieldMethods.ref}
        />
    );
}

export function FieldBarSelect(props: FieldProps) {
    const { field, control, allOptions } = props;
    const { label, placeholder, optionSelector, params = {} } = field;
    const { allowMultiple } = params;

    const options = allOptions[optionSelector ?? ''];

    const { field: fieldMethods, formState } = useController({
        name: field.id,
        control,
    });

    return (
        <BarSelect
            label={label}
            value={fieldMethods.value}
            onChange={fieldMethods.onChange}
            placeholder={placeholder}
            options={options}
            allowMultiple={allowMultiple}
        />
    );
}

export function FieldColor(props: FieldProps) {
    const { field, control } = props;
    const { params = {} } = field;
    const { size = 40 } = params;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <ColorPicker
            style={{ marginLeft: '8px', top: '14px' }}
            size={size}
            color={fieldMethods.value}
            onChange={fieldMethods.onChange}
        />
    );
}

export function FieldCheckbox(props: FieldProps) {
    const { field, control } = props;
    const { label, placeholder } = field;

    const { field: fieldMethods } = useController({
        name: field.id,
        control,
    });

    return (
        <PaddingTop>
            <Checkbox onChange={fieldMethods.onChange} />
        </PaddingTop>
    );
}

export function FieldDetails(props: FieldProps) {
    const { field, control, allOptions, allDetails } = props;
    const { params } = field;

    const { detailsId } = params ?? {};

    const data = useFormData();

    const Cmp = allDetails[detailsId];

    if (!Cmp) {
        return null;
    }

    return <Cmp data={data} />;
}

const map: Record<FieldType, FC<FieldProps>> = {
    checkbox: FieldCheckbox,
    text: FieldInput,
    choice: FieldDate,
    date: FieldDate,
    tags: FieldTags,
    select: FieldDropdown,
    hidden: FieldHidden,
    color: FieldColor,
    number: FieldNumber,
    imageUpload: FieldImageUpload,
    boolean: FieldDate,
    slider: FieldSlider,
    phone: FieldPhone,
    password: FieldPassword,
    paragraph: FieldParagraph,
    email: FieldEmail,
    url: FieldUrl,
    barSelect: FieldBarSelect,
    details: FieldDetails,
};
/*
<Checkbox label='good' value='true' onChange={onCheckboxChange} />
            <ChoiceGroup />
            <ComboBox />
            <Date />
            <Dropdown />
            <Input />
            <Slider />
            <SpinButton />
            <Toggle />
*/

function useFormData() {
    const [data, setData] = useState<Json>({});
    const { watch, getValues } = useFormContext();

    useEffect(() => {
        const subscription = watch((value) => {
            const values = getValues();
            setData(values);
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    return data;
}
