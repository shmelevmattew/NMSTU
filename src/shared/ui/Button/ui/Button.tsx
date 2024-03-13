import React, { ReactNode } from 'react';
import { classNames } from 'shared/aliases';
import cls from './Button.module.scss';

export enum CategoryVariants {
    ALL_CATEGORIES = 'all-categories',
    NEWS_CATEGORY = 'news-category',
    TEACHER_CATEGORY = 'teacher-category',
    HELP_CATEGORY = 'help-category',
}

export enum ButtonTheme {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    NO_BG = 'no-backgound',
}

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    className?: string;
    styles?: Object;
    children?: ReactNode;
    isSelected?: boolean;
    category?: CategoryVariants;
    theme?: ButtonTheme;
    icon?: string;
    iconEnd?: boolean;
    clickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}
export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        styles = {},
        isSelected = false,
        category = 'default',
        theme = ButtonTheme.PRIMARY,
        disabled = false,
        icon,
        iconEnd = false,
        clickEvent,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
    };
    return (
        <button
            onClick={(e) => clickEvent(e)}
            disabled={disabled}
            style={styles}
            className={classNames(cls.Button, mods, [
                className,
                cls[theme],
                cls[category],
                // icon ? `pi pi-${icon}` : '',
                isSelected ? cls['Button-selected'] : '',
            ])}
        >
            {icon
                ? !iconEnd && (
                    <span
                        className={`pi pi-${icon}`}
                        style={{ marginRight: '5px' }}
                    />
                )
                : null}
            {children}
            {icon
                ? iconEnd && (
                    <span
                        className={`pi pi-${icon}`}
                        style={{ marginLeft: '5px' }}
                    />
                )
                : null}
        </button>
    );
};
