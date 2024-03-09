import { classNames } from 'shared/aliases';
import cls from './Button.module.scss';

interface ButtonProps {
    className?:string
}
export const Button = ({ className }:ButtonProps) => (
    <div>
        <button className={classNames(cls.Button, {}, [className])}>Hello world</button>
    </div>
);
