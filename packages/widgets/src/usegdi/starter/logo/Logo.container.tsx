import { useDispatch } from '@gdi/store-base';
import { useMemo } from 'react';
import Logo from './Logo';

export type LogoContainerProps = {
  darkMode?: boolean;
};

export function LogoContainer(props: LogoContainerProps) {
  const { darkMode } = props;
  const dispatch = useDispatch();

  const callbacks = useMemo(
    () => ({
      onLogoClick: () => {
        dispatch({
          type: 'NAVIGATE',
          to: '/',
        });
      },
      onDoubleClick: () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      },
      onGithubClick: () => {
        window.open('https://github.com/dht/gdi', '_blank');
      },
    }),
    []
  );

  return <Logo darkMode={darkMode} callbacks={callbacks} />;
}

export default LogoContainer;
