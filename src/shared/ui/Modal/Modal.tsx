import { classNames } from 'shared/aliases';
import {
    FC, ReactNode, useCallback, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps{
    className?:string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void;
}
export const Modal:FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            console.log('TODO');
        }
    }, [onClose]);
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay}>
                    <div className={classNames(cls.content)}>
                        <div onClick={closeHandler}>
                            <i className={classNames(cls.iconClose, {}, ['pi pi-times'])} />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
