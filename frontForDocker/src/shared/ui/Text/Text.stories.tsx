import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider/inedx';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Text_Light = Template.bind({});
Text_Light.args = {
    title: 'TEXT_TEXT',
    text: 'Text text text',
};

export const Text_Light_OnlyTitle = Template.bind({});
Text_Light_OnlyTitle.args = {
    title: 'TEXT_TEXT',
};

export const Text_Light_OnlyText = Template.bind({});
Text_Light_OnlyText.args = {
    text: 'Text text text',
};

export const Text_Light_Error = Template.bind({});
Text_Light_Error.args = {
    text: 'Text text text',
    theme: 'error',
};

export const Text_Dark = Template.bind({});
Text_Dark.args = {
    title: 'TEXT_TEXT',
    text: 'Text text text',
};
Text_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Text_Dark_OnlyTitle = Template.bind({});
Text_Dark_OnlyTitle.args = {
    title: 'TEXT_TEXT',
};
Text_Dark_OnlyTitle.decorators = [ThemeDecorator(THEMES.DARK)];

export const Text_Dark_OnlyText = Template.bind({});
Text_Dark_OnlyText.args = {
    text: 'Text text text',
};
Text_Dark_OnlyText.decorators = [ThemeDecorator(THEMES.DARK)];

export const Text_Dark_Error = Template.bind({});
Text_Dark_Error.args = {
    text: 'Text text text',
    theme: 'error',
};
Text_Dark_Error.decorators = [ThemeDecorator(THEMES.DARK)];
