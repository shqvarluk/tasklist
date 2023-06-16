import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IUser, userActions, 
} from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { IThunkConfig } from 'app/providers/StoreProvider';

interface ILoginByUsernameArgs {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameArgs, IThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { extra, dispatch, rejectWithValue })=> {
        const { api, navigate } = extra;

        try {
            const response = await api.post<IUser>('/login', authData);

            if (!response.data) throw new Error();

            localStorage.setItem(USER_LOCALSTORAGE_KEY,JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            navigate?.('/profile');

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
