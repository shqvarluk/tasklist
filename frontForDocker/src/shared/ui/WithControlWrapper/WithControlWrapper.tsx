import React, {
    FC, PropsWithChildren,
} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';
import classes from './WithControlWrapper.module.scss';
import {Text} from 'shared/ui/Text/Text';

export type TControlWrapperThemes = 'flat' | 'common';

interface IWithControlWrapperProps {
    theme?: TControlWrapperThemes,
    label?: string,
    error?: string,
    mix?: string,
}

export const WithControlWrapper: FC<PropsWithChildren<IWithControlWrapperProps>> = (
    {
        children,
        ...props
    }) => {
    const {
        theme = 'common',
        label,
        mix,
        error,
    } = props;

    return (
        <div className={classes.controlWrapper}>
            <div className={classNames(classes.controlWrapperContainer, {}, [mix, classes[theme]])}>
                {label && <Text text={label}/>}
                {children}
            </div>
            {error && (
                <Text
                    text={error}
                    theme='error'
                />
            )}
        </div>
    );
};
// export const WithControlWrapper: FC<IWithControlWrapperProps> = ({
//     label,
//     mix,
// }) => {
//     const { t } = useTranslation();
//     return (
//         <div className={classNames(classes.withControlWrapper, {}, [mix])}>
//         </div>
//     );
// };
