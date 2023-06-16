import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '../../../app/providers/ThemeProvider/inedx';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { profileReducer } from 'entities/Profile';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import avatar from '../../../shared/assets/tests/avatarStory.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const reducersMap = {
    profile: profileReducer,
};

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        isReadonly: true,
        isLoading: false,
        error: false,
        form: {
            avatar: avatar,
            username: 'admin',
            name: 'Андрей',
            surname: 'Лапузин',
            age: 28,
            city: 'Екатеринбург',
            country: Country.Russia,
            currency: Currency.RUB,
        },
    },
}, reducersMap), RouterDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
    profile: {
        isReadonly: true,
        isLoading: false,
        error: false,
        form: {
            avatar: avatar,
            username: 'admin',
            name: 'Андрей',
            surname: 'Лапузин',
            age: 28,
            city: 'Екатеринбург',
            country: Country.Russia,
            currency: Currency.RUB,
        },
    },
}, reducersMap), ThemeDecorator(THEMES.DARK), RouterDecorator];
