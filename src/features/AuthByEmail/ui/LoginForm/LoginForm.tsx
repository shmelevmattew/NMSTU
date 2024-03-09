import { classNames } from 'shared/aliases';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?:string
}
export const LoginForm = (props:LoginFormProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h1 className={cls.title}>Вход</h1>
            <Input placeholder="Логин" />
            <Input placeholder="Пароль" />
        </div>
    );
};
