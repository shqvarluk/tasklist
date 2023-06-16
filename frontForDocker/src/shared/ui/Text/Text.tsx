import React, { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

type TAlign = 'center' | 'right' | 'left'

interface ITextProps {
    title?: string,
    text?: string,
    theme?: 'common' | 'error'
    align?: TAlign,
    mix?: string,
}

export const Text = memo(({
    title,
    text,
    theme = 'common',
    align = 'left',
    mix,
}: ITextProps) => {
    return (
        <div className={classNames(classes.text, {}, [mix, classes[theme], classes[align]])}>
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});
