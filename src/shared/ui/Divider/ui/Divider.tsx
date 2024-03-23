import { classNames } from 'shared/aliases';
import cls from './Divider.module.scss';

interface DividerProps {
    className?:string
}
export const Divider = (props:DividerProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Divider, {}, [className])} />
    );
};
