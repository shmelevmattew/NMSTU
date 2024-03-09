import { classNames } from 'shared/aliases';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByEmail';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?:string
}
export const LoginModal = (props:LoginModalProps) => {
    const { className } = props;
    return (
        <Modal className={classNames(cls.LoginModal, {}, [className])}>
            <LoginForm />
        </Modal>
    );
};
