import { useContext } from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    THEMES,
} from '../lib/ThemeContext';

type TUseThemeResult = [THEMES, () => void]

export const useTheme = (): TUseThemeResult => {
    const { theme, setTheme, themes } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = themes?.next() || THEMES.DARK;
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return [theme || THEMES.LIGHT, toggleTheme];
};

