import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import {
    IProfile, IProfileSchema,
} from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: IProfileSchema = {
    data: undefined,
    form: {},
    isLoading: false,
    isReadonly: true,
    error: undefined,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        toggleReadonly: (state) => {
            state.isReadonly = !state.isReadonly;
        },
        cancelEdit: (state) => {
            state.isReadonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
        updateProfile: (state, { payload }: PayloadAction<IProfile>) => {
            state.form = {
                ...state.form,
                ...payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                state.data = payload;
                state.form = payload;
                state.isLoading = false;
                state.error = false;
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
            });

        builder
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, { payload }) => {
                state.data = payload;
                state.form = payload;
                state.isLoading = false;
                state.isReadonly = true;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.validateErrors = payload;
            });
    },
});

export const {
    actions: profileActions,
    reducer: profileReducer,
} = profileSlice;
