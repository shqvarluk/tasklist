import React, {
    FC, memo, 
} from 'react';
import { useTranslation } from 'react-i18next';

import { IProfile } from 'entities/Profile';
import { Input } from 'shared/ui/Input/Input';
import { PROFILE_CARD_FIELDS } from 'entities/Profile/model/constants/constants';
import {
    Currency, CurrencySelect, 
} from 'entities/Currency';
import {
    Country, CountrySelect, 
} from 'entities/Country';

interface IEditFormProps {
    data?: IProfile,
    updateField: (value: string, name?: string) => void,
}

export const EditForm: FC<IEditFormProps> = memo(({
    data,
    updateField,
}) => {
    const { t } = useTranslation('profile');

    if (!data) return null;

    return (
        <>
            {PROFILE_CARD_FIELDS.map(({
                placeholder,
                label,
                name, ...fieldProps
            }) => (
                <Input
                    key={name}
                    value={`${data?.[name] || ''}`}
                    label={t(label)}
                    placeholder={t(placeholder)}
                    onChange={updateField}
                    name={name}
                    {...fieldProps}
                />
            ))}
            <CurrencySelect
                value={data?.currency || Currency.RUB}
                onChange={updateField}
                name='currency'
            />
            <CountrySelect
                value={data?.country || Country.Russia}
                onChange={updateField}
                name='country'
            />
        </>
    );
});
