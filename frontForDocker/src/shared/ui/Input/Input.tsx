import React, {
    InputHTMLAttributes, memo, useEffect, useRef, 
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';
import { WithControlWrapper } from 'shared/ui/WithControlWrapper/WithControlWrapper';
import { validateNumber } from '../../lib/utils/validateNumber/validateNumber';

type THTMLInputElement = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'className' | 'readOnly'>
interface IInputProps extends THTMLInputElement{
    value?: string
    onChange?: (value: string, fieldName?: string) => void,
    autofocus?: boolean,
    isReadonly?: boolean,
    label?: string,
    mix?: string,
    name?: string,
    isFullWidth?: boolean,
}

export const Input = memo(({
    value,
    onChange,
    mix,
    label,
    type = 'text',
    autofocus = false,
    isReadonly = false,
    name = '',
    isFullWidth = false,
    ...props
}: IInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value;
        if (type === 'number' && !validateNumber(currentValue)) return;
        onChange?.(currentValue, name);
    };

    const mods = {
        [classes.readonly]: isReadonly,
        [classes.fullWidth]: isFullWidth,
    };

    useEffect(() => {
        if (autofocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef, autofocus]);

    const component = (
        <div className={classes.inputWrapper}>
            <input
                ref={inputRef}
                type={type}
                onChange={onChangeHandler}
                className={classNames(classes.input, mods, [mix])}
                autoFocus={autofocus}
                value={value}
                readOnly={isReadonly}
                {...props}
            />
        </div>
    );

    if (label) return (
        <WithControlWrapper
            label={label}
        >
            {component}
        </WithControlWrapper>
    );

    return component;
});
