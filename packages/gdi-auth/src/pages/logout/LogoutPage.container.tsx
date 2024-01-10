import { useMount } from 'react-use';
import LogoutPage from './LogoutPage';
import { invokeEvent } from 'shared-base';

export type LogoutContainerPageProps = {};

export function LogoutPageContainer(_props: LogoutContainerPageProps) {
  useMount(() => {
    invokeEvent('logout');
  });

  function onHome() {
    invokeEvent('nav', { path: '/' });
  }

  return <LogoutPage onHome={onHome} />;
}

export default LogoutPageContainer;
