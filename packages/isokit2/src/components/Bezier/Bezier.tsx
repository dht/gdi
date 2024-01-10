import { useState } from 'react';
import { BezierCurveEditor } from 'react-bezier-curve-editor';
import 'react-bezier-curve-editor/index.css';
import { easing } from './Bezier.data';
import { Actions, Button, Curve, Option, Options, Values, Wrapper } from './Bezier.style';

type Easing = [number, number, number, number];

const DEFAULT_EASING: Easing = [0.42, 0, 1, 1];

export type BezierProps = {
  value?: Easing;
  onCta: (value: number[]) => void;
  onCancel: () => void;
};

export function Bezier(props: BezierProps) {
  const { value = DEFAULT_EASING } = props;
  const [values, setValues] = useState<Easing>(value);

  function onChange(value: Easing) {
    setValues(value);
  }

  function onCta() {
    props.onCta(values);
  }

  function onCancel() {
    props.onCancel();
  }

  function renderValue(i: number, index: number) {
    return <span key={index}>{i.toFixed(2)}</span>;
  }

  function renderValues() {
    return values.map((i: number, index) => renderValue(i, index));
  }

  function renderOption(option: Json) {
    const { label } = option;

    return (
      <Option key={option.id} className='option' onClick={() => setValues(option.values)}>
        {label}
      </Option>
    );
  }

  function renderOptions() {
    return easing.map((option: Json) => renderOption(option));
  }

  return (
    <Wrapper className='Bezier-wrapper' data-testid='Bezier-wrapper'>
      <Options>{renderOptions()}</Options>
      <Curve>
        <BezierCurveEditor value={values} onChange={onChange} size={300} outerAreaSize={80} />
      </Curve>
      <Values>[{renderValues()}]</Values>
      <Actions>
        <Button className='link' onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onCta}>Save</Button>
      </Actions>
    </Wrapper>
  );
}

export default Bezier;
