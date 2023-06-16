import { IStateSchema } from 'app/providers/StoreProvider';
import {
    profileActions,
    profileReducer,
} from './profileSlice';
import {
    IProfileSchema,
    isReadonlyProfileSelector,
} from 'entities/Profile';

const state: DeepPartial<IStateSchema> = { profile: {
    isReadonly: true,
    isLoading: false,
    data: {
        name: 'Андрей',
        surname: 'Лапузин',
        age: 28,
    },
    form: {},
} };

describe('profileSlice', () => {

    // Оьычные редьюсеры расписывать не интересно, поленился
    test('set readonly', () => {
        const newState = profileReducer(
            state.profile as IProfileSchema,
            profileActions.toggleReadonly(),
        );

        expect(isReadonlyProfileSelector({
            ...state,
            profile: { ...newState },
        } as IStateSchema)).toBe(false);
    });

    test('cancel edit', () => {
        const newState = profileReducer(
            state.profile as IProfileSchema,
            profileActions.cancelEdit(),
        );

        expect(isReadonlyProfileSelector({
            ...state,
            profile: { ...newState },
        } as IStateSchema)).toBe(true);
    });
});


