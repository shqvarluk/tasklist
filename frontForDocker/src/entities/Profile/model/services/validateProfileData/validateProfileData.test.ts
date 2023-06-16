import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileData } from '../../types/profile';

const profileData = {
    username: 'admin',
    name: 'Андрей',
    surname: 'Лапузин',
    age: 28,
    city: 'Екатеринбург',
    country: Country.Russia,
    currency: Currency.RUB,
};

describe('validateProfileData', () => {
    test('success', () => {
        const result = validateProfileData(profileData);

        expect(result).toEqual([]);
    });

    test('without first and last name', () => {
        const result = validateProfileData({
            ...profileData,
            name: '',
            surname: '',
        });

        expect(result).toEqual([ValidateProfileData.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({
            ...profileData,
            age: -1,
        });

        expect(result).toEqual([ValidateProfileData.INCORRECT_AGE]);
    });

    test('incorrect country', () => {
        const result = validateProfileData({
            ...profileData,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileData.INCORRECT_COUNTRY]);
    });

    test('incorrect country', () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileData.INCORRECT_USER_DATA,
            ValidateProfileData.INCORRECT_AGE,
            ValidateProfileData.INCORRECT_COUNTRY,
        ]);
    });
});
