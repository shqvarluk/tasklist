import { createContext } from 'react';
import { CircularArray } from 'shared/lib/utils/collections/CircularArray/CircularArray';

export enum THEMES {
    DARK = 'app_dark_theme',
    LIGHT = 'app_light_theme',
    MINT = 'app_mint_theme',
}

export interface IThemeContextProps {
    theme?: THEMES,
    setTheme?: (theme: THEMES) => void,
    themes?: CircularArray<THEMES>
}
export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
