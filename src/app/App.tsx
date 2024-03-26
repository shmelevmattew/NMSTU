import React, { type ReactElement, Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/aliases/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import 'app/styles/index.scss';
import { UserImage } from 'shared/ui/UserImage/UserImage';

const App = (): ReactElement => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <Navbar />
                <AppRouter />
                <UserImage imageUrl="context.png" altText="image" />
            </Suspense>
        </div>
    );
};

export default App;
