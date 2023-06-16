import {
    mockedAxios, testAsyncThunk, 
} from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { updateProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileData } from '../../types/profile';

const payload = {
    username: 'admin',
    name: 'Андрей',
    surname: 'Лапузин',
    age: 28,
    city: 'Екатеринбург',
    country: Country.Russia,
    currency: Currency.RUB,
};

describe('updateProfileData', () => {
    test('success update profile', async () => {
        mockedAxios.put.mockReturnValue(Promise.resolve({
            data: payload,
        }));

        const { thunk } = testAsyncThunk(updateProfileData, {
            profile: {
                form: payload,
            },
        });
        const result = await thunk();

        expect(mockedAxios.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(payload);
    });

    test('fail update profile', async () => {
        mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const { thunk } = testAsyncThunk(updateProfileData, {
            profile: {
                form: payload,
            },
        });
        const result = await thunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileData.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const { thunk } = testAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...payload,
                    name: '',
                },
            },
        });
        const result = await thunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileData.INCORRECT_USER_DATA]);
    });
});
