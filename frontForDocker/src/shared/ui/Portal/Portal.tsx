import {
    FC, ReactNode, 
} from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    container?: HTMLElement,
    children: ReactNode,
}

export const Portal: FC<IPortalProps> = ({
    container = document.body,
    children,
}) => {
    return createPortal(children, container);
};
