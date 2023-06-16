import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import { Select as BaseSelect } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'shared/Select',
    component: BaseSelect,
} as ComponentMeta<typeof BaseSelect>;

const Template: ComponentStory<typeof BaseSelect> = (args) => <BaseSelect {...args} />;

export const Select_Common = Template.bind({});
Select_Common.args = {
    label: 'Test test test',
    options: [
        {
            name: '1',
            value: '123',
        },
        {
            name: '1',
            value: '123',
        },
    ],
};

export const Select_Flat = Template.bind({});
Select_Flat.args = {
    label: 'Test test test',
    theme: 'flat',
    options: [
        {
            name: '1',
            value: '123',
        },
        {
            name: '1',
            value: '123',
        },
    ],
};

export const Select_Dark = Template.bind({});
Select_Dark.args = {
    label: 'Test test test',
    options: [
        {
            name: '1',
            value: '123',
        },
        {
            name: '1',
            value: '123',
        },
    ],
};
Select_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Select_Flat_Dark = Template.bind({});
Select_Flat_Dark.args = {
    label: 'Test test test',
    theme: 'flat',
    options: [
        {
            name: '1',
            value: '123',
        },
        {
            name: '1',
            value: '123',
        },
    ],
};
Select_Flat_Dark.decorators = [ThemeDecorator(THEMES.DARK)];
