import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { SquareLoader } from 'shared/ui/SquareLoader';
import classes from './PageLoader.module.scss';

interface IPageLoaderProps {
    mix?: string,
}

export const PageLoader: FC<IPageLoaderProps> = ({
    mix,
}) => {
    return (
        <div className={classNames(classes.pageLoader, {}, [mix])}>
            <SquareLoader />
        </div>
    );
};
