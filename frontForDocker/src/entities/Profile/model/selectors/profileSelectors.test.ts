import { IStateSchema } from 'app/providers/StoreProvider';
import {
    isProfileLoadingSelector,
    isReadonlyProfileSelector,
    profileDataSelector,
    profileErrorSelector,
    profileErrorsSelector, profileFormSelector,
} from './profileSelectors';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileData } from 'entities/Profile/model/types/profile';

describe('profileDataSelector', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            name: 'Андрей',
            surname: 'Лапузин',
            age: 28,
            city: 'Екатеринбург',
            country: Country.Russia,
            currency: Currency.RUB,
        };
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data,
            },
        };

        expect(profileDataSelector(state as IStateSchema)).toEqual(data);
    });

    test('should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: undefined,
            },
        };

        expect(profileDataSelector(state as IStateSchema)).toEqual(undefined);
    });
});

describe('profileErrorSelector', () => {
    test('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: {},
                error: true,
            },
        };

        expect(profileErrorSelector(state as IStateSchema)).toBeTruthy();
    });

    test('should dont return error', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: {},
                error: false,
            },
        };

        expect(profileErrorsSelector(state as IStateSchema)).toBeFalsy();
    });
});

describe('profileReadonlySelector', () => {
    test('should return readonly', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: {},
                isReadonly: true,
            },
        };

        expect(isReadonlyProfileSelector(state as IStateSchema)).toBeTruthy();
    });

    test('should dont return readonly', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: {},
                error: false,
            },
        };

        expect(isReadonlyProfileSelector(state as IStateSchema)).toBeFalsy();
    });
});

describe('profileLoadingSelector', () => {
    test('should return loading', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: {},
                isLoading: true,
            },
        };

        expect(isProfileLoadingSelector(state as IStateSchema)).toBeTruthy();
    });

    test('should dont return loading', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: {},
                isLoading: false,
            },
        };

        expect(isProfileLoadingSelector(state as IStateSchema)).toBeFalsy();
    });
});

describe('profileErrorsSelector', () => {
    test('should return errors', () => {
        const errors = [ValidateProfileData.NO_DATA];

        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: {},
                validateErrors: errors,
            },
        };

        expect(profileErrorsSelector(state as IStateSchema)).toEqual(errors);
    });

    test('should return emoty errors', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: {},
                validateErrors: [],
            },
        };

        expect(profileErrorsSelector(state as IStateSchema)).toEqual([]);
    });
});

describe('profileFormSelector', () => {
    test('should return form data', () => {
        const form = {
            username: 'admin',
            name: 'Андрей',
            surname: 'Лапузин',
            age: 28,
            city: 'Екатеринбург',
            country: Country.Russia,
            currency: Currency.RUB,
        };
        const state: DeepPartial<IStateSchema> = {
            profile: {
                form,
            },
        };

        expect(profileFormSelector(state as IStateSchema)).toEqual(form);
    });

    test('should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                form: undefined,
            },
        };

        expect(profileFormSelector(state as IStateSchema)).toBe(undefined);
    });
});
