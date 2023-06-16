import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/lib/ThemeContext';
import avatar from '../../../../shared/assets/tests/avatarStory.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary__Readonly = Template.bind({});
Primary__Readonly.args = {
    data: {
        username: 'admin',
        age: 28,
        country: Country.Russia,
        name: 'Андрей',
        surname: 'Лапузин',
        city: 'Екатеринбург',
        avatar: avatar,
    },
    isReadonly: true,
};

export const Primary__Readonly_Dark = Template.bind({});
Primary__Readonly_Dark.args = {
    data: {
        username: 'admin',
        age: 28,
        country: Country.Russia,
        name: 'Андрей',
        surname: 'Лапузин',
        city: 'Екатеринбург',
        avatar: avatar,
    },
    isReadonly: true,
};
Primary__Readonly_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Primary__Readonly_Error = Template.bind({});
Primary__Readonly_Error.args = {
    data: {
        username: 'admin',
        age: 28,
        country: Country.Russia,
        name: 'Андрей',
        surname: 'Лапузин',
        city: 'Екатеринбург',
        avatar: avatar,
    },
    isReadonly: true,
    error: true,
};

export const Primary__ReadonlyDark_Error = Template.bind({});
Primary__ReadonlyDark_Error.args = {
    data: {
        username: 'admin',
        age: 28,
        country: Country.Russia,
        name: 'Андрей',
        surname: 'Лапузин',
        city: 'Екатеринбург',
        avatar: avatar,
    },
    isReadonly: true,
    error: true,
};
Primary__ReadonlyDark_Error.decorators = [ThemeDecorator(THEMES.DARK)];

export const Primary__Readonly_Loading = Template.bind({});
Primary__Readonly_Loading.args = {
    data: {
        username: 'admin',
        age: 28,
        country: Country.Russia,
        name: 'Андрей',
        surname: 'Лапузин',
        city: 'Екатеринбург',
        avatar: avatar,
    },
    isReadonly: true,
    isLoading: true,
};

export const Primary__ReadonlyDark_Loading = Template.bind({});
Primary__ReadonlyDark_Loading.args = {
    data: {
        username: 'admin',
        age: 28,
        country: Country.Russia,
        name: 'Андрей',
        surname: 'Лапузин',
        city: 'Екатеринбург',
        avatar: avatar,
    },
    isReadonly: true,
    isLoading: true,
};
Primary__ReadonlyDark_Loading.decorators = [ThemeDecorator(THEMES.DARK)];

// Editable

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 28,
        country: Country.Russia,
        name: 'Андрей',
        surname: 'Лапузин',
        city: 'Екатеринбург',
    },
    isReadonly: false,
};

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {
    data: {
        username: 'admin',
        age: 28,
        country: Country.Russia,
        name: 'Андрей',
        surname: 'Лапузин',
        city: 'Екатеринбург',
    },
    isReadonly: false,
};
Primary_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

