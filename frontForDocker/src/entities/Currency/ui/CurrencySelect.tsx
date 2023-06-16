import React, {
    FC, memo, useCallback, 
} from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../model/types/currency';
import {
    IOption, Select, 
} from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { TControlWrapperThemes } from 'shared/ui/WithControlWrapper/WithControlWrapper';

interface ICurrencySelectProps {
    value: Currency
    onChange: (value: Currency, fieldName?: string) => void
    name: string,
    label?: string,
    theme?: TControlWrapperThemes
    mix?: string,
}

const options: Array<IOption> = [
    {
        name: Currency.RUB,
        value: Currency.RUB,
    },
    {
        name: Currency.EUR,
        value: Currency.EUR,
    },
    {
        name: Currency.USD,
        value: Currency.USD,
    },
];

export const CurrencySelect: FC<ICurrencySelectProps> = memo(({
    value,
    onChange,
    name,
    label,
    theme,
    mix,
}) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((_value: string) => (
        onChange(_value as Currency, name)
    ), [onChange, name]);

    return (
        <Select
            label={label || t('Выберите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            name={name}
            theme={theme}
            mix={classNames('', {}, [mix])}
        />
    );
});
