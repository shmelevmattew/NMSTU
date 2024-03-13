import { classNames } from 'shared/aliases';
import { Input } from 'shared/ui/Input/ui/Input';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?:string
}
export const LoginForm = (props:LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h1 className={cls.title}>{t('Sign in')}</h1>
            <Input placeholder={t('Login')} />
            <Input placeholder={t('Password')} />
        </div>
    );
};
