import { Wrapper } from './Loader.style';

export type LoaderProps = {
  isRunning: boolean;
};

export function Loader(props: LoaderProps) {
  const { isRunning } = props;

  if (!isRunning) {
    return null;
  }

  return (
    <Wrapper className='Loader-wrapper' data-testid='Loader-wrapper'>
      |
    </Wrapper>
  );
}

export default Loader;
