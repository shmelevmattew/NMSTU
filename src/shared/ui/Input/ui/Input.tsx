import { classNames } from 'shared/aliases';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

enum InputTheme {
    DEFAULT = 'default',
    OUTLINED= 'outline',
}
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    theme?:InputTheme;
}
export const Input = memo((props:InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        theme = InputTheme.DEFAULT,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        onChange?.(e.target.value);
    }

    const onFocus = () => {
        setIsFocused(true);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div>
            <input
                className={classNames(cls.Input, {}, [cls[theme]])}
                ref={ref}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                {...otherProps}
            />
        </div>
    );
});
