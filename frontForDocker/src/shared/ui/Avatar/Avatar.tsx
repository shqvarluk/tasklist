import React, {
    CSSProperties, memo, useMemo, 
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Avatar.module.scss';

interface IAvatarProps {
    src: string,
    size?: number,
    alt?: string,
    mix?: string,
}

export const Avatar = memo<IAvatarProps>(({
    src,
    size = 100,
    alt,
    mix,
}) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            style={styles}
            className={classNames(classes.avatar, {}, [mix])}
            alt={alt}
        />
    );
});
