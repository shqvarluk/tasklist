import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import {
    Button, ThemeButton, 
} from './Button';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.PRIMARY,
};

export const Primary_Disabled = Template.bind({});
Primary_Disabled.args = {
    children: 'TEST_TEST',
    theme: ThemeButton.PRIMARY,
    disabled: true,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.OUTLINE,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.OUTLINE,
    size: 'l',
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.OUTLINE,
    size: 'xl',
};

export const Inherit = Template.bind({});
Inherit.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.INHERIT,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ThemeButton.PRIMARY,
    size: 'm',
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ThemeButton.PRIMARY,
    size: 'l',
    square: true,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ThemeButton.PRIMARY,
    size: 'xl',
    square: true,
};

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.PRIMARY,
};
Primary_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Primary_Dark_Disabled = Template.bind({});
Primary_Dark_Disabled.args = {
    children: 'TEST_TEST',
    theme: ThemeButton.PRIMARY,
    disabled: true,
};
Primary_Dark_Disabled.decorators = [ThemeDecorator(THEMES.DARK)];

export const Clear_Dark = Template.bind({});
Clear_Dark.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.CLEAR,
};
Clear_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Outline_Dark = Template.bind({});
Outline_Dark.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.OUTLINE,
};
Outline_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const OutlineL_Dark = Template.bind({});
OutlineL_Dark.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.OUTLINE,
    size: 'l',
};
OutlineL_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const OutlineXL_Dark = Template.bind({});
OutlineXL_Dark.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.OUTLINE,
    size: 'xl',
};
OutlineXL_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Inherit_Dark = Template.bind({});
Inherit_Dark.args = {
    children: 'TEST_TEXT',
    theme: ThemeButton.INHERIT,
};
Inherit_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const SquareM_Dark = Template.bind({});
SquareM_Dark.args = {
    children: '>',
    theme: ThemeButton.PRIMARY,
    size: 'm',
    square: true,
};
SquareM_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const SquareL_Dark = Template.bind({});
SquareL_Dark.args = {
    children: '>',
    theme: ThemeButton.PRIMARY,
    size: 'l',
    square: true,
};
SquareL_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const SquareXL_Dark = Template.bind({});
SquareXL_Dark.args = {
    children: '>',
    theme: ThemeButton.PRIMARY,
    size: 'xl',
    square: true,
};
SquareXL_Dark.decorators = [ThemeDecorator(THEMES.DARK)];

