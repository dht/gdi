import { LoginProvider } from '@gdi/firebase';
import { GdiProvider } from '@gdi/store-base';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { getBoolean, setBoolean } from 'shared-base';
import { App } from './bootstrap/App';
import { store } from './main.config';
import './main.scss';

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

if (getBoolean('debugModeOn') === undefined) {
  setBoolean('debugModeOn', true);
}

root.render(
  <GdiProvider store={store}>
    <Suspense fallback={<div />}>
      <Router>
        <LoginProvider>
          <App />
        </LoginProvider>
      </Router>
    </Suspense>
  </GdiProvider>
);
