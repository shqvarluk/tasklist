import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import { CountrySelect as Select } from './CountrySelect';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'entities/CountrySelect',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const CountrySelect_Common = Template.bind({});
CountrySelect_Common.args = {
    label: 'Test test test',
};

export const CountrySelect_Flat = Template.bind({});
CountrySelect_Flat.args = {
    label: 'Test test test',
    theme: 'flat',
};

export const CountrySelect_Dark = Template.bind({});
CountrySelect_Dark.args = {
    label: 'Test test test',
};
CountrySelect_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const CountrySelect_Flat_Dark = Template.bind({});
CountrySelect_Flat_Dark.args = {
    label: 'Test test test',
    theme: 'flat',
};
CountrySelect_Flat_Dark.decorators = [ThemeDecorator(THEMES.DARK)];
