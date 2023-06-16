import {
    AnyAction, combineReducers, Reducer, ReducersMapObject, 
} from '@reduxjs/toolkit';
import {
    IReducerManager, IStateSchema, TReducers, 
} from '../config/State.schema';

export const createReducerManager = (initialReducers: ReducersMapObject<IStateSchema>): IReducerManager  => {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);
    let keysToRemove: Array<TReducers> = [];

    return {
        getReducersMap: () => reducers,

        reduce: (state: IStateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: TReducers, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: TReducers) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
};
