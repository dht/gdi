import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { delay, invokeEvent } from 'shared-base';
import { IFormField, IFormProps } from './Form.types';
import { rulesToYup } from '../../utils/yup';
import { Field } from '../Field/Field';
import { layouts } from '../Layouts/Layouts';
import { Submit } from '../Submit/Submit';
import { Description, ErrorMessage, FormContainer, FormContent, Wrapper } from './Form.style';
import Group from '../Group/Group';

let isSyncing = false;

export function Form(props: IFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const { config, data, error, allOptions = {}, sync } = props;
  const { description, layout, groups, fields, submit, cancel } = config;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { groupId: submitGroupId } = submit ?? {};
  const { flavour } = layout;

  const schema = rulesToYup(config);

  const methods = useForm({
    defaultValues: data,
    resolver: yupResolver(schema),
  });

  const { handleSubmit, control, formState, watch, setValue, getValues } = methods;
  const { errors } = formState;

  const errorToShow = useMemo(() => {
    const output: string[] = [];

    if (error) {
      output.push(error);
    }

    Object.values(errors).forEach((e: any) => {
      output.push(e.message as string);
    });

    return output.join('; ');
  }, [error, errors]);

  useEffect(() => {
    if (!sync) {
      return;
    }

    isSyncing = true;

    Object.keys(data).forEach((key) => {
      setValue(key, data[key]);
    });

    isSyncing = false;
  }, [data, sync]);

  useEffect(() => {
    if (!errorToShow) {
      return;
    }

    invokeEvent('global/form', {
      entity: config.id,
      action: 'error',
      actionValue: errorToShow,
    });
  }, [errorToShow]);

  const errorMessage = '';

  useEffect(() => {
    const fillForm = (ev: any) => {
      const { detail: data } = ev;

      Object.keys(data).forEach((key) => {
        const value = data[key];
        setValue(key, value, { shouldValidate: false, shouldDirty: false, shouldTouch: false });
      });
    };
    document.addEventListener('FILL_FORM', fillForm);

    return () => {
      document.removeEventListener('FILL_FORM', fillForm);
    };
  }, []);

  useEffect(() => {
    if (!props.onChange) {
      return;
    }

    const subscription = watch((data: Json, change) => {
      const { name } = change;

      if (!name || !props.onChange) {
        return;
      }

      if (sync && isSyncing) {
        return;
      }

      props.onChange(
        {
          [name]: data[name],
        },
        data
      );
    });
    return () => subscription.unsubscribe();
  }, [watch, sync]);

  const onCta = useCallback(
    async (allData: Json) => {
      if (!props.onSubmit || isSubmitting) {
        return;
      }

      setIsSubmitting(true);

      const { dirtyFields } = formState;

      invokeEvent('global/form', {
        entity: config.id,
        action: 'submit',
        actionValue: config.submit?.title,
      });

      const values = getValues();

      invokeEvent('global/form', {
        entity: config.id,
        action: 'submit',
      });

      const change = Object.keys(dirtyFields)
        .filter((key) => dirtyFields[key])
        .reduce((output, key) => {
          output[key] = allData[key];
          return output;
        }, {} as Json);

      const response = await props.onSubmit(change, allData);
      await delay(500);

      setIsSubmitting(false);
    },
    [formState.dirtyFields]
  );

  function renderField(field: IFormField) {
    const { optionSelector } = field;

    let extra = {};

    if (optionSelector) {
      extra = {
        options: allOptions[optionSelector],
      };
    }

    return (
      <Field
        key={field.id}
        control={control}
        field={field}
        errorMessage={errorMessage}
        labelSize={layout.labelSize}
        {...extra}
      />
    );
  }

  function renderFields(groupId: string) {
    const output = fields
      .filter((field) => field.groupId === groupId)
      .map((field: IFormField) => renderField(field));
    return output;
  }

  function renderGroup(groupId: string, _index: number) {
    const showSubmit = submitGroupId === groupId;
    const group = groups.find((g) => g.id === groupId);

    if (!group) {
      return null;
    }

    return (
      <Group group={group} key={groupId}>
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
    if (!submit) {
      return null;
    }

    return (
      <Submit
        submit={submit}
        width={layout.width}
        isSubmitting={isSubmitting}
        cancel={cancel}
        onCancel={props.onCancel}
      />
    );
  }

  function renderError() {
    if (!errorToShow) {
      return null;
    }

    return <ErrorMessage>{errorToShow}</ErrorMessage>;
  }

  function renderDescription() {
    if (!description) {
      return null;
    }

    return <Description>{description}</Description>;
  }

  const style: React.CSSProperties = {};

  if (layout.maxContentHeight) {
    style.maxHeight = layout.maxContentHeight;
    style.overflowX = 'hidden';
    style.overflowY = 'auto';
  }

  return (
    <Wrapper className='Form-wrapper' data-testid='Form-wrapper'>
      <FormProvider {...methods}>
        <FormContainer ref={ref} onSubmit={handleSubmit(onCta)} autoComplete=''>
          <FormContent style={style}>
            {renderDescription()}
            {renderLayout()}
          </FormContent>
          {props.children}
          {!submitGroupId && renderActions()}
          {renderError()}
        </FormContainer>
      </FormProvider>
    </Wrapper>
  );
}

export default Form;
