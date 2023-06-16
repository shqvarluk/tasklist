import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import { SquareLoader } from './SquareLoader';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { THEMES } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'shared/SquareLoader',
    component: SquareLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SquareLoader>;

const Template: ComponentStory<typeof SquareLoader> = (args) => <SquareLoader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
