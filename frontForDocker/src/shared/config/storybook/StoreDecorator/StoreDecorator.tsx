import { Story } from '@storybook/react';
import {
    IStateSchema, StoreProvider, 
} from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

type TAsyncReducers = DeepPartial<ReducersMapObject<IStateSchema>>
export const StoreDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: TAsyncReducers,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state as IStateSchema}
        asyncReducers={asyncReducers as ReducersMapObject<IStateSchema>}
    >
        <StoryComponent />
    </StoreProvider>
);
