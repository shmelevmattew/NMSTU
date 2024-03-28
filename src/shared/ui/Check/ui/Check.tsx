import React, { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Check.module.scss';

interface CheckProps extends React.HTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
}

export const Check: FC<CheckProps> = (props) => {
    const {
        children,
        className,
        style,
        defaultChecked = false,
        disabled = false,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
    };
    return (
        <input
            type="checkbox"
            checked={defaultChecked}
            className={classNames(cls.Check, mods, [className])}
            {...otherProps}
        />
    );
};
