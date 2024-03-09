import { classNames } from 'shared/aliases';
import React, {
    FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
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

    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
    const [isClosing, setIsClosing] = useState(false);
    const ANIMATION_DELAY = 300;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={classNames(cls.content)} onClick={onContentClick}>
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
