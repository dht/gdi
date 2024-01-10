import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { Circle, Wrapper } from './Loader.style';

export type LoaderProps = {
  size?: number;
  color?: string;
  debounce?: number;
  marginTop?: number;
};

export function Loader(props: LoaderProps) {
  const { size = 50, color = 'gray', marginTop = 0, debounce = 0 } = props;
  const [show, setShow] = useState(false);

  const className = classnames('svg-container', color, {});

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, debounce);

    return () => {
      clearTimeout(timeout);
    };
  });

  if (!show) {
    return null;
  }

  const style: React.CSSProperties = {
    marginTop: `${marginTop}px`,
  };

  return (
    <Wrapper style={style} className='Loader-wrapper' data-testid='Loader-wrapper'>
      <Circle className={className} height={size} width={size} viewBox='0 0 100 100'>
        <circle className='loader-svg bg' cx='50' cy='50' r='45'></circle>
        <circle className='loader-svg animate' cx='50' cy='50' r='45'></circle>
      </Circle>
    </Wrapper>
  );
}

export default Loader;
