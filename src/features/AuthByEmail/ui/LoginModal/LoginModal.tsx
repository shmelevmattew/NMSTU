import { classNames } from 'shared/aliases';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByEmail';
import { useState } from 'react';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?:string
}
export const LoginModal = (props:LoginModalProps) => {
    const { className } = props;
    const [opened, setOpened] = useState(false);
    return (
        <>
            <button onClick={() => setOpened(!opened)}>summon modal</button>
            <Modal
                isOpen={opened}
                onClose={() => setOpened(false)}
                className={classNames(cls.LoginModal, {}, [className])}
            >
                <LoginForm />
            </Modal>
        </>
    );
};
