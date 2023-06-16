import {
    CombinedState, configureStore, Reducer, ReducersMapObject, 
} from '@reduxjs/toolkit';

import { createReducerManager } from '../config/reducerManager';
import { userReducer } from 'entities/User';
import {
    IStateSchema, IThunkExtraArgs, 
} from './State.schema';
import { API_CONTROLLER } from 'shared/api/api';
import {
    NavigateOptions, To, 
} from 'react-router-dom';

export const createReduxStore = (
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) => {
    const reducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(reducers);

    const extraArg: IThunkExtraArgs = {
        api: API_CONTROLLER,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
