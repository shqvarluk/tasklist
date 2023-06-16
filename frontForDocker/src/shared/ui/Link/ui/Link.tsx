import React, { memo } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Link.module.scss';

export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface ILinkProps extends LinkProps {
    mix?: string,
    theme?: LinkTheme,
}

export const Link = memo(({
    mix,
    children,
    to,
    theme = LinkTheme.PRIMARY,
    ...props
}: ILinkProps) => {
    return (
        <ReactRouterLink
            to={to}
            className={classNames(classes.link, {}, [mix, classes[theme]])}
            {...props}
        >
            {children}
        </ReactRouterLink>
    );
});
