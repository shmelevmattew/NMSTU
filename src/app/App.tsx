import React, { type ReactElement, Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/aliases/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import Navbar from 'widgets/Navbar';
import { useTranslation } from 'react-i18next';

const App = (): ReactElement => {
    const { theme, toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    useEffect(() => {
        import(`../../public/locales/${i18n.language}/about.json`).then(about => {
            i18n.addResourceBundle(i18n.language, 'about', about);
        });
        import(`../../public/locales/${i18n.language}/main.json`).then(main => {
            i18n.addResourceBundle(i18n.language, 'main', main);
        });
        import(`../../public/locales/${i18n.language}/navbar.json`).then(navbar => {
            i18n.addResourceBundle(i18n.language, 'navbar', navbar);
        });
        import(`../../public/locales/${i18n.language}/error.json`).then(error => {
            i18n.addResourceBundle(i18n.language, 'error', error);
        });
    }, [i18n.language]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <button onClick={() => {
                    toggleTheme();
                }}
                >
                    click
                </button>
                <button onClick={() => {
                    toggleLang();
                }}
                >
                    {t('Translate')}
                </button>

                <Navbar />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
