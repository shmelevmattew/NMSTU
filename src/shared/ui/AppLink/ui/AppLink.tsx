import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

interface AppLinkProps extends LinkProps {
    className?:string,
}
export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(null, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
