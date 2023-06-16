import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, { rejectWithValue,  extra }) => {
        const { api } = extra;

        try {
            const response = await api.get<IProfile>('/profile');

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
