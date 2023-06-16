import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import { CurrencySelect as Select } from './CurrencySelect';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'entities/CurrencySelect',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const CurrencySelect_Common = Template.bind({});
CurrencySelect_Common.args = {
    label: 'Test test test',
};

export const CurrencySelect_Flat = Template.bind({});
CurrencySelect_Flat.args = {
    label: 'Test test test',
    theme: 'flat',
};

export const CurrencySelect_Dark = Template.bind({});
CurrencySelect_Dark.args = {
    label: 'Test test test',
};
CurrencySelect_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const CurrencySelect_Flat_Dark = Template.bind({});
CurrencySelect_Flat_Dark.args = {
    label: 'Test test test',
    theme: 'flat',
};
CurrencySelect_Flat_Dark.decorators = [ThemeDecorator(THEMES.DARK)];
