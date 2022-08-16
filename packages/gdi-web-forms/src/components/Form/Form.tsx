import Field from '../Field/Field';
import React, {
    useCallback,
    useEffect,
    useRef,
    useMemo,
    useState,
} from 'react';
import { Container, FormContainer, Group } from './Form.style';
import {
    AllDetails,
    IFormConfig,
    IFormField,
    IFormLayoutGroup,
} from '../../types';
import { layouts } from '../Layouts/Layouts';
import { FormProvider, useForm, UseFormWatch } from 'react-hook-form';
import { useMount, useSetState } from 'react-use';
import { Submit } from '../Submit/Submit';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { get, isEmpty } from 'lodash';

import { setLocale } from 'yup';

setLocale({
    mixed: {
        default: 'field_invalid',
        required: () => ({ key: 'field_required' }),
    },
    string: {
        email: () => ({ key: 'field_valid_email' }),
    },
    number: {
        min: ({ min }) => ({ key: 'field_too_small', values: { min } }),
        max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
    },
    date: {},
    boolean: {},
    object: {},
    array: {
        min: ({ min }) => ({ key: 'field_required', values: { min } }),
    },
});

const schema = yup.object({
    preferredDays: yup.array().of(yup.string()).min(1),
    preferredDayParts: yup.array().of(yup.string()).min(1),
    preferredCommunicationMethod: yup.array().of(yup.string()).min(1),
    email: yup.string().email().required(),
    businessName: yup.string().required(),
    fullName: yup.string().required(),
    businessType: yup.string().required(),
    phoneNumber: yup.string().required(),
    notes: yup.string().max(500),
});

export type FormProps = {
    config: IFormConfig;
    data: Json;
    allOptions: Json;
    allDetails: AllDetails;
    autoFocus?: boolean;
    showGroup?: (groupId: string, data: Json) => boolean;
    onSave: (change: Json) => Promise<boolean>;
    onChange: (change: Json) => void;
    onClose?: () => void;
    children?: JSX.Element | JSX.Element[];
    t?: (key: string) => string;
};

export function Form(props: FormProps) {
    const ref = useRef<HTMLFormElement>(null);
    const { config, data, allOptions, autoFocus, allDetails } = props;
    const { layout, groups, fields, submit } = config;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { groupId: submitGroupId } = submit;
    const { flavour, labelSize } = layout;
    const methods = useForm({
        defaultValues: data,
        resolver: yupResolver(schema),
    });

    const { handleSubmit, control, formState, watch, setValue } = methods;

    useEffect(() => {
        const fillForm = (ev: any) => {
            const { detail: data } = ev;

            Object.keys(data).forEach((key) => {
                const value = data[key];
                setValue(key, value);
            });
        };
        document.addEventListener('FILL_FORM', fillForm);

        return () => {
            document.removeEventListener('FILL_FORM', fillForm);
        };
    }, []);

    useEffect(() => {
        if (!isEmpty(formState.errors)) {
            if (!ref.current) {
                return;
            }
            const firstError = ref.current.querySelector('.form-error-label');
            if (!firstError) {
                return;
            }
            const box = firstError.getBoundingClientRect();

            window.scrollBy({
                top: box.top - 150,
            });
        }
    }, [formState.errors]);

    const visibleGroups = useVisibleGroups({
        groups,
        showGroup: props.showGroup,
        watch,
    });

    useMount(() => {
        setTimeout(() => {
            if (autoFocus && ref.current) {
                const el = ref.current.querySelector('input');
                if (el) el.focus();
            }
        });
    });

    useEffect(() => {
        if (!props.onChange) {
            return;
        }

        const subscription = watch((data: Json, change) => {
            const { name } = change;

            if (!name) {
                return;
            }

            props.onChange({
                [name]: data[name],
            });
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = async (data: Json) => {
        setIsSubmitting(true);
        const response = await props.onSave(data);
        setIsSubmitting(false);
    };

    function renderField(field: IFormField) {
        const { id } = field;

        const errorKey = get(formState, `errors.${id}.message.key`);
        const errorMessage = props.t && errorKey ? props.t(errorKey) : errorKey;

        return (
            <Field
                key={field.id}
                control={control}
                field={field}
                allOptions={allOptions}
                allDetails={allDetails}
                errorMessage={errorMessage}
                labelSize={labelSize}
            />
        );
    }

    function renderFields(groupId: string) {
        return fields
            .filter((field) => field.groupId === groupId)
            .map((field: IFormField) => renderField(field));
    }

    function renderGroup(groupId: string, _index: number) {
        const showGroup = visibleGroups[groupId];
        const showSubmit = submitGroupId === groupId;

        if (!showGroup) {
            return null;
        }

        return (
            <Group key={groupId}>
                {renderFields(groupId)}
                {showSubmit && renderActions()}
            </Group>
        );
    }

    function renderLayout() {
        const Cmp = layouts[flavour];

        return (
            <Cmp
                flex={layout.flex}
                width={layout.width}
                padding={layout.padding}
                groups={groups}
                renderGroup={renderGroup}
            />
        );
    }

    function renderActions() {
        return (
            <Submit
                submit={submit}
                onClose={props.onClose}
                isSubmitting={isSubmitting}
            />
        );
    }

    return (
        <Container className='Form-container' data-testid='Form-container'>
            <FormProvider {...methods}>
                <FormContainer
                    ref={ref}
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete='none'
                >
                    {renderLayout()}
                    {props.children}
                    {!submitGroupId && renderActions()}
                </FormContainer>
            </FormProvider>
        </Container>
    );
}

type UseVisibleGroupsProps = {
    watch: UseFormWatch<Json>;
    showGroup?: (groupId: string, data: Json) => boolean;
    groups: IFormLayoutGroup[];
};

function useVisibleGroups(props: UseVisibleGroupsProps) {
    const { watch, groups = [] } = props;

    const [visibleGroups, patchVisibleGroups] = useSetState<
        Record<string, boolean>
    >({});

    const groupIds = useMemo(() => {
        return groups.map((group) => group.id);
    }, [groups]);

    const calculateGroupVisibility = useCallback(
        (data: Json = {}) => {
            const change = groupIds.reduce((output, groupId) => {
                const show = !props.showGroup || props.showGroup(groupId, data);
                output[groupId] = show;
                return output;
            }, {} as Json);

            patchVisibleGroups(change);
        },
        [watch, groupIds]
    );

    useMount(() => {
        calculateGroupVisibility();
    });

    useEffect(() => {
        const subscription = watch((value) => {
            calculateGroupVisibility(value);
        });
        return () => subscription.unsubscribe();
    }, [watch, groupIds]);

    return visibleGroups;
}

export default Form;
