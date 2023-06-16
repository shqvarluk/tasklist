import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { loginReducer } from '../../model/slice/loginSlice';
import { TReducersList } from 'shared/lib/components/ReucerLoader/ReducerLoader';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const reducersMap: TReducersList = {
    loginForm: loginReducer,
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: false,
    },
}, reducersMap), RouterDecorator];

export const Primary_Loading = Template.bind({});
Primary_Loading.args = {};
Primary_Loading.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true,
    },
}, reducersMap), RouterDecorator];

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {};
Primary_Dark.decorators = [ThemeDecorator(THEMES.DARK), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: false,
    },
}, reducersMap), RouterDecorator];

export const Primary_Loading_Dark = Template.bind({});
Primary_Loading_Dark.args = {};
Primary_Loading_Dark.decorators = [ThemeDecorator(THEMES.DARK), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true,
    },
}, reducersMap), RouterDecorator];

