import React, { type ReactElement, Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import 'app/styles/index.scss';

const App = (): ReactElement => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <Navbar />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
