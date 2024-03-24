import { classNames } from 'shared/aliases';
import { FC, ReactNode } from 'react';
import cls from './Card.module.scss';

interface CardProps {
    className?:string,
    children?:ReactNode,
}
export const Card:FC<CardProps> = (props) => {
    const { className, children } = props;
    return (
        <div className={classNames(cls.Card, {}, [className])}>
            {children}
        </div>
    );
};
