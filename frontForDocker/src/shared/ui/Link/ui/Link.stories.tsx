import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import {
    Link, LinkTheme, 
} from './Link';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../../config/storybook/RouterDecorator/RouterDecorator';
import { THEMES } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'shared/Link',
    component: Link,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    to: '/',
    children: 'Ссылка',
    theme: LinkTheme.PRIMARY,
};
Primary.decorators = [RouterDecorator];

export const Secondary = Template.bind({});
Secondary.args = {
    to: '/',
    children: 'Ссылка',
    theme: LinkTheme.SECONDARY,
};
Secondary.decorators = [RouterDecorator];

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {
    to: '/',
    children: 'Ссылка',
    theme: LinkTheme.PRIMARY,
};
Primary_Dark.decorators = [RouterDecorator, ThemeDecorator(THEMES.DARK)];

export const Secondary_Dark = Template.bind({});
Secondary_Dark.args = {
    to: '/',
    children: 'Ссылка',
    theme: LinkTheme.SECONDARY,
};
Secondary_Dark.decorators = [RouterDecorator, ThemeDecorator(THEMES.DARK)];
