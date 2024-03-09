import './app/styles/index.scss';
import 'shared/config/i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ThemeProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ErrorBoundary>
    </ThemeProvider>,
);
