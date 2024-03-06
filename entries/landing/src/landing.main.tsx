import { createRoot } from 'react-dom/client';
import { App } from './bootstrap/landing.App';
import './landing.main.scss';

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

root.render(<App />);
