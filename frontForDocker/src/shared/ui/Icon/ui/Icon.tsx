import React, {
    Children, FC, useMemo, 
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Icon.module.scss';
import {
    EnumIcons, Icons, 
} from 'shared/constants/Icons';

interface IIconProps {
    icon: EnumIcons
    mix?: string,
}

export const Icon: FC<IIconProps> = ({
    mix,
    icon,
    children,
}) => {
    const iconComponent = useMemo(() => {
        const CurrentIcon = Icons[icon];
        if (CurrentIcon) return <CurrentIcon />;
        return <span />;
    }, [icon]);

    const renderContent = () => {
        if (Children.count(children)) return (
            <div className={classNames(classes.icon, {}, [mix])}>
                {iconComponent}
                {children}
            </div>
        );
        return iconComponent;
    };

    return renderContent();
};
