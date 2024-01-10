import Button from '../Button/Button';
import { IFormCancel, IFormSubmit } from '../Form/Form.types';
import Loader from '../Loader/Loader';
import { Cancel, CircularProgress, Wrapper } from './Submit.style';

export type SubmitProps = {
  submit: IFormSubmit;
  cancel: IFormCancel;
  isSubmitting?: boolean;
  onCancel?: () => void;
  width?: number;
};

export function Submit(props: SubmitProps) {
  let { submit, isSubmitting, cancel, width } = props;
  const { title, iconName } = submit;

  function renderInner() {
    return isSubmitting ? <Loader size={20} /> : title;
  }

  function renderCancel() {
    if (!cancel) {
      return;
    }

    return (
      <Cancel>
        <Button color='secondary' data-testid='form-cancel' onClick={props.onCancel}>
          {cancel.title}
        </Button>
      </Cancel>
    );
  }

  const style: React.CSSProperties = {
    // maxWidth: width ? `${width}px` : '100%',
  };

  return (
    <Wrapper className='Submit-wrapper' data-testid='Submit-wrapper' style={style}>
      {renderCancel()}
      <Button color='primary' data-testid='form-submit'>
        {renderInner()}
      </Button>
    </Wrapper>
  );
}

export default Submit;
