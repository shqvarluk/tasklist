import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './SquareLoader.module.scss';

interface ISquareLoaderProps {
    mix?: string,
}

export const SquareLoader: FC<ISquareLoaderProps> = ({
    mix,
}) => {
    return (
        <div className={classNames(classes.squareLoader, {}, [mix])}>
            <div className={classes.squareLoaderBrick}/>
            <div className={classes.squareLoaderBrick}/>
            <div className={classes.squareLoaderBrick}/>
        </div>
    );
};
