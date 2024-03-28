import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ReactNode } from 'react';
import cls from './Blur.module.scss';

interface BlurProps {
    className?:string,
}
export const Blur:FC<BlurProps> = (props) => {
    const {
        className,
    } = props;
    return (
        <div className={cls.Blur} />
    );
};
