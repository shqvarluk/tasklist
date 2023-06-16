import React from 'react';
import {
    ComponentMeta, ComponentStory, 
} from '@storybook/react';

import { Avatar as BaseAvatar } from './Avatar';
import AvatarStory from '../../assets/tests/avatarStory.jpg';

export default {
    title: 'shared/Avatar',
    component: BaseAvatar,
} as ComponentMeta<typeof BaseAvatar>;

const Template: ComponentStory<typeof BaseAvatar> = (args) => <BaseAvatar {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
    src: AvatarStory,
    size: 150,
};
