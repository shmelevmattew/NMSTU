import { classNames } from 'shared/aliases';
import { FC, ReactNode } from 'react';
import cls from './Scrollable.module.scss';

interface ScrollableProps {
    className?:string,
    axisX?:boolean,
    axisY?:boolean,
    children?:ReactNode,
}
export const Scrollable:FC<ScrollableProps> = (props) => {
    const {
        className,
        children,
        axisX = true,
        axisY = false,
    } = props;

    const mods:Record<string, boolean> = {
        [cls.ScrollableX]: axisX,
        [cls.ScrollableY]: axisY,
    };

    return (
        <div className={classNames(cls.Scrollable, mods, [className])}>
            {children}
        </div>
    );
};
