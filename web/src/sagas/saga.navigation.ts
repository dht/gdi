import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';

type NavigationMethod = (to: string) => void;

let navigationMethod: NavigationMethod;

export const setNavigationMethod = (method: NavigationMethod) => {
  navigationMethod = method;
};

export function* navEvent(event: any) {
  const { data } = event;
  const { path } = data;

  navigationMethod(path);
}

export function* navAction(action: any) {
  const { to } = action;

  if (to.includes('http')) {
    window.open(to, '_blank');
    return;
  }

  navigationMethod(to);
}

export function useNavigationMethod() {
  const nav = useNavigate();

  useEffect(() => {
    setNavigationMethod(nav);
  }, [nav]);
}

export function* root() {
  const channel = customEvenChannel('nav');
  yield takeEvery(channel, navEvent);
  yield takeEvery('NAVIGATE', navAction);
}

export const saga = {
  id: 'gdi.navigation',
  type: 'customEvent',
  root: root,
  trigger: {
    actionTypes: ['NAVIGATE'],
    eventNames: ['nav'],
  },
};
