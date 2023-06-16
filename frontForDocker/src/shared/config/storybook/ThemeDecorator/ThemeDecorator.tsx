import { Story } from '@storybook/react';
import { THEMES } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: THEMES) => (StoryComponent :Story) => {

    document.body.className = theme;

    return <StoryComponent />;
};
