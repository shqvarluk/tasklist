import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import { Input as BaseInput } from './Input';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'shared/Input',
    component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => <BaseInput {...args} />;

export const Input = Template.bind({});
Input.args = {
    value: 'TEST_TEXT',
};

export const Input_Dark = Template.bind({});
Input_Dark.args = {
    value: 'TEST_TEXT',
};
Input_Dark.decorators = [ThemeDecorator(THEMES.DARK)];


