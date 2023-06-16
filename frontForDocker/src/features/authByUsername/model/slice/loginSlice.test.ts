import { DeepPartial } from '@reduxjs/toolkit';
import { ILoginSchema } from 'features/authByUsername';
import {
    loginActions, loginReducer, 
} from './loginSlice';

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<ILoginSchema> = { username: '123' };
        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('321'))).toEqual({
            username: '321',
        });
    });

    test('set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: '' };
        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('321'))).toEqual({
            password: '321',
        });
    });
});
