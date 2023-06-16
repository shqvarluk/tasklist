import { IStateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios from 'axios';

type TActionCreator<Return, Arg, Rejected> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: Rejected }>

jest.mock('axios');
export const mockedAxios = jest.mocked(axios);

export const testAsyncThunk = <Return, Arg, Rejected>(
    actionCreator: TActionCreator<Return, Arg, Rejected>,
    state: DeepPartial<IStateSchema> = {},
) => {
    const dispatch = jest.fn();
    const getState: () => IStateSchema = jest.fn(() => state as IStateSchema);

    const navigate = jest.fn();

    const thunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        return action(dispatch, getState, {
            api: mockedAxios,
            navigate,
        });
    };

    return {
        thunk,
        dispatch,
        getState,
    };
};
