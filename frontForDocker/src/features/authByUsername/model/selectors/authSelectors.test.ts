import { IStateSchema } from 'app/providers/StoreProvider';
import {
    errorSelector, isLoadingSelector, passwordSelector, usernameSelector, 
} from './authSelectors';

describe('getErrorSelector', () => {
    test('should return error', () => {

        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'error',
            },
        };

        expect(errorSelector(state as IStateSchema)).toEqual('error');

    });

    test('should return undefined', () => {

        const state: DeepPartial<IStateSchema> = {};
        expect(errorSelector(state as IStateSchema)).toEqual(undefined);

    });
});

describe('getIsLoadingSelector', () => {
    test('should return true', () => {

        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(isLoadingSelector(state as IStateSchema)).toEqual(true);

    });

    test('should return false', () => {

        const state: DeepPartial<IStateSchema> = {};
        expect(isLoadingSelector(state as IStateSchema)).toEqual(false);

    });
});

describe('getLoginSelector', () => {
    test('should return login', () => {

        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'username',
            },
        };

        expect(usernameSelector(state as IStateSchema)).toEqual('username');

    });

    test('should return empty string', () => {

        const state: DeepPartial<IStateSchema> = {};
        expect(usernameSelector(state as IStateSchema)).toEqual('');

    });
});

describe('getPasswordSelector', () => {
    test('should return password', () => {

        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: 'password',
            },
        };

        expect(passwordSelector(state as IStateSchema)).toBe('password');

    });

    test('should return empty string', () => {

        const state: DeepPartial<IStateSchema> = {};
        expect(passwordSelector(state as IStateSchema)).toBe('');

    });
});
