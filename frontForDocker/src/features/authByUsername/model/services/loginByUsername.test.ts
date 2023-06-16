import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import {
    mockedAxios, testAsyncThunk, 
} from 'shared/lib/testAsyncThunk/testAsyncThunk';

describe('loginByUsername',  () => {
    test('isLoginSuccess', async () => {
        const payload = {
            username: '123',
            id: '123',
            password: '123',
        };

        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: payload,
        }));

        const { thunk, dispatch } = testAsyncThunk(loginByUsername);
        const result = await thunk(payload);

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(payload));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(payload);
    });

    test('isLoginError', async () => {
        const payload = {
            username: '123',
            id: '123',
            password: '123',
        };

        mockedAxios.post.mockReturnValue(Promise.resolve({
            status: 403,
        }));

        const { thunk, dispatch } = testAsyncThunk(loginByUsername);
        const result = await thunk(payload);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
