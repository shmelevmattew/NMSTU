import React from 'react';
import { useTranslation } from 'react-i18next';
import { Post } from 'widgets/Post/ui/Post';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.align}>
            <Post className={cls.TestPost} />
            <Post className={cls.TestPost} />
        </div>
    );
};

export default MainPage;
