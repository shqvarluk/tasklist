import React, {
    FC, memo, 
} from 'react';

import { useTheme } from 'app/providers/ThemeProvider/inedx';
import { Button } from 'shared/ui/Button';
import ThemeSwitcherIcon from '../../../assets/icons/themeSwitcher.svg';

interface IThemeSwitcherProps {
    mix?: string,
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = memo(() => {

    const [_, setTheme] = useTheme();

    return (
        <Button onClick={setTheme}>
            <ThemeSwitcherIcon />
        </Button>
    );
});
