import React, {
    useCallback,
    useEffect,
    useRef,
    useMemo,
    useState,
} from 'react';
import Field from '../Field/Field';
import { Wrapper, FormContainer, Group } from './Form.style';
import { IFormField, IFormLayoutGroup, IFormProps } from '../../types';
import { layouts } from '../Layouts/Layouts';
import { FormProvider, useForm, UseFormWatch } from 'react-hook-form';
import { useMount, useSetState } from 'react-use';
import { Submit } from '../Submit/Submit';
import { yupResolver } from '@hookform/resolvers/yup';
import { get } from 'shared-base';
import { isEmpty } from 'shared-base';
import { rulesToYup } from '../../utils/yup';

export function Form(props: IFormProps) {
    const ref = useRef<HTMLFormElement>(null);
    const {
        config,
        data,
        allOptions = {},
        allDetails = {},
        allMethods = {},
        autoFocus = true,
    } = props;

    const { layout, groups, fields, submit, external } = config;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { groupId: submitGroupId } = submit;
    const { flavour, labelSize } = layout;

    const schema = rulesToYup(config);

    const methods = useForm({
        defaultValues: data,
        resolver: yupResolver(schema),
    });

    const { handleSubmit, control, formState, watch, setValue, getValues } =
        methods;

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
                const el = ref.current.querySelector('.Field-wrapper');
                if (el) {
                    const inputEl =
                        el.querySelector('input') ||
                        el.querySelector('textarea');
                    if (inputEl) {
                        inputEl.focus();
                    }
                }
            }
        });
    });

    useEffect(() => {
        if (!props.onChange) {
            return;
        }

        const subscription = watch((data: Json, change) => {
            const { name } = change;

            if (!name || !props.onChange) {
                return;
            }

            props.onChange({
                [name]: data[name],
            });
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = useCallback(
        async (allData: Json) => {
            setIsSubmitting(true);

            const { dirtyFields } = formState;

            const values = getValues();

            const change = Object.keys(dirtyFields)
                .filter((key) => dirtyFields[key])
                .reduce((output, key) => {
                    output[key] = allData[key];
                    return output;
                }, {} as Json);

            const response = await props.onSave(change, allData);
            setIsSubmitting(false);
        },
        [formState.dirtyFields]
    );

    function onExtraChange(change: Json = {}) {
        Object.keys(change).forEach((key) => {
            setValue(key, change[key], { shouldDirty: true });
        });
    }

    function checkShowIf(showIf: string, _field: IFormField) {
        const [fieldId, fieldValue] = showIf.split('=');

        const values = getValues();
        const value = get(values, fieldId);

        return value === fieldValue;
    }

    function renderField(field: IFormField) {
        const { id, showIf } = field;

        if (showIf) {
            if (!checkShowIf(showIf, field)) {
                return;
            }
        }

        const errorKey = get(formState, `errors.${id}.message.key`);
        const errorMessage = props.t && errorKey ? props.t(errorKey) : errorKey;

        return (
            <Field
                key={field.id}
                control={control}
                field={field}
                allOptions={allOptions}
                allDetails={allDetails}
                allMethods={allMethods}
                errorMessage={errorMessage}
                labelSize={labelSize}
                onExtraChange={onExtraChange}
                itemId={data.id}
                external={external}
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
        <Wrapper className='Form-wrapper' data-testid='Form-wrapper'>
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
        </Wrapper>
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
