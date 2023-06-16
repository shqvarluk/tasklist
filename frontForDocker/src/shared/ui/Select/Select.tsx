import React, {
    ChangeEvent, FC, memo, ReactElement, useCallback, useMemo, 
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';
import {
    TControlWrapperThemes,
    WithControlWrapper,
} from 'shared/ui/WithControlWrapper/WithControlWrapper';

export interface IOption {
    name: string,
    value: string,
}

interface ISelectProps {
    label: string
    name?: string,
    theme?: TControlWrapperThemes,
    options: Array<IOption>,
    value: string,
    onChange: (value: string, name?: string) => void
    mix?: string,
}

export const Select: FC<ISelectProps> = memo(({
    label,
    name = '',
    theme,
    options,
    value,
    onChange,
    mix,
}) => {
    const onChangeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value, name);
    }, [name, onChange]);

    const optionsList = useMemo<Array<ReactElement>>(() => options.map(({ name, value }) => (
        <option
            value={name}
            key={name}
        >
            {value}
        </option>
    )), [options]);

    return (
        <div className={classNames(classes.selectWrapper, {}, [mix])}>
            <WithControlWrapper
                label={label}
                theme={theme}
            >
                <select
                    className={classes.select}
                    value={value}
                    onChange={onChangeHandler}
                >
                    {optionsList}
                </select>
            </WithControlWrapper>
        </div>
    );
});
