import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState, 
} from 'react';

import classes from './Modal.module.scss';
import { classNames } from '../../lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

interface IModalProps {
    mix?: string,
    isOpen: boolean,
    onClose?: () => void
    children?: ReactNode,
    lazy?: boolean,
}

export const Modal: FC<IModalProps> = ({
    mix,
    isOpen = false,
    onClose,
    children,
    lazy = false,
}) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') onCloseHandler();
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen]);

    const contentClickHandler = (event: React.MouseEvent) => event.stopPropagation();

    const mods = {
        [classes.opend]: lazy ? isMounted && isOpen : isOpen,
        [classes.isClosing]: isClosing,
    };

    if (lazy && (!isMounted && !isOpen)) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(classes.modal, mods, [mix])}>
                <div
                    className={classes.overlay}
                    onClick={onCloseHandler}
                >
                    <div
                        className={classes.content}
                        onClick={contentClickHandler}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
