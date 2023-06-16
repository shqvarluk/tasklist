import {
    mockedAxios, testAsyncThunk, 
} from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { fetchProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const payload = {
    username: 'admin',
    name: 'Андрей',
    surname: 'Лапузин',
    age: 28,
    city: 'Екатеринбург',
    country: Country.Russia,
    currency: Currency.RUB,
};

describe('fetchProfileData', () => {
    test('success fetch profile', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: payload,
        }));

        const { thunk } = testAsyncThunk(fetchProfileData);
        const result = await thunk();

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(payload);
    });

    test('fail fetch profile', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const { thunk } = testAsyncThunk(fetchProfileData);
        const result = await thunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
