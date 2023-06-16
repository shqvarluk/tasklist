import { createSlice } from '@reduxjs/toolkit';
import { ILoginSchema } from '../types/login.schema';
import { loginByUsername } from '../services/loginByUsername';

const initialState: ILoginSchema = {
    isLoading: false,
    username: '',
    password: '',
};
export const loginSlice = createSlice({
    name: 'loginByUsername',
    initialState: initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = '';

            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
