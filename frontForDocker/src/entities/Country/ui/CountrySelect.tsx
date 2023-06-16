import React, {
    FC, memo, useCallback, 
} from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../model/types/country';
import {
    IOption, Select, 
} from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { TControlWrapperThemes } from 'shared/ui/WithControlWrapper/WithControlWrapper';

interface ICountrySelectProps {
    value: Country
    onChange: (value: Country, fieldName?: string) => void
    name: string,
    label?: string,
    theme?: TControlWrapperThemes
    mix?: string,
}

const options: Array<IOption> = [
    {
        name: Country.Armenia,
        value: Country.Armenia,
    },
    {
        name: Country.Belarus,
        value: Country.Belarus,
    },
    {
        name: Country.Kazahstan,
        value: Country.Kazahstan,
    },
    {
        name: Country.Russia,
        value: Country.Russia,
    },
    {
        name: Country.Ukraine,
        value: Country.Ukraine,
    },
];

export const CountrySelect: FC<ICountrySelectProps> = memo(({
    value,
    onChange,
    name,
    label,
    theme,
    mix,
}) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((_value: string) => (
        onChange(_value as Country, name)
    ), [onChange, name]);

    return (
        <Select
            label={label || t('Выберите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            name={name}
            theme={theme}
            mix={classNames('', {}, [mix])}
        />
    );
});
