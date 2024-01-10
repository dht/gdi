import React from 'react';
import { Circle, Wrapper } from './Loader.style';

export type LoaderProps = {
  size?: number;
};

export function Loader(props: LoaderProps) {
  const { size = 20 } = props;

  return (
    <Wrapper className='Loader-wrapper' data-testid='Loader-wrapper'>
      <Circle height={size} width={size} viewBox='0 0 100 100'>
        <circle className='loader-svg bg' cx='50' cy='50' r='45'></circle>
        <circle className='loader-svg animate' cx='50' cy='50' r='45'></circle>
      </Circle>
    </Wrapper>
  );
}

export default Loader;
