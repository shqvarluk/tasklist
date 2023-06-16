import React, {
    FC, ReactNode, 
} from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { IStateSchema } from 'app/providers/StoreProvider/config/State.schema';
import {
    DeepPartial, ReducersMapObject, 
} from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface IStoreProviderProps {
    children: ReactNode,
    initialState?: IStateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: FC<IStoreProviderProps> = ({
    children,
    initialState,
    asyncReducers,
}) => {

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState,
        asyncReducers as ReducersMapObject<IStateSchema>,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
