import React, {
    FC, Suspense, 
} from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { SquareLoader } from 'shared/ui/SquareLoader';

interface ILoginModalProps {
    isOpen: boolean;
    mix?: string,
    onClose: () => void,
}

export const LoginModal: FC<ILoginModalProps> = (props) => {

    const { onClose } = props;

    return (
        <Modal
            lazy
            {...props}
        >
            <Suspense fallback={<SquareLoader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
