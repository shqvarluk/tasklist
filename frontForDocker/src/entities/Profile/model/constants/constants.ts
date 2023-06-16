import {
    TOptionalReadonlyProfileFields, TProfileCardFields,
} from '../types/profileCard';

export const PROFILE_CARD_FIELDS: TProfileCardFields = [
    {
        type: 'input',
        label: 'Имя пользователя',
        placeholder: 'Введите имя пользователя',
        name: 'username',
    },
    {
        type: 'input',
        label: 'Ваше имя',
        placeholder: 'Введите ваше имя',
        name: 'name',
    },
    {
        type: 'input',
        label: 'Ваша фамилия',
        placeholder: 'Введите Вашу фамилию',
        name: 'surname',
    },
    {
        type: 'number',
        label: 'Ваш возраст',
        placeholder: 'Введите ваш возраст',
        name: 'age',
    },
    {
        type: 'input',
        label: 'Ваш город',
        placeholder: 'Введите ваш город',
        name: 'city',
    },
    {
        type: 'input',
        label: 'Аватар',
        placeholder: 'Укажите ссылку на аватар',
        name: 'avatar',
    },
];

export const OPTIONAL_READONLY_PROFILE_FIELDS: TOptionalReadonlyProfileFields = {
    username: 'Имя пользователя',
    age: 'Возраст',
    city: 'Город',
    currency: 'Валюта',
    country: 'Страна',
};
