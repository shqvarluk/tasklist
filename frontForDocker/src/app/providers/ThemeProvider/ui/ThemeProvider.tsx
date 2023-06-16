import React, {
    FC, useEffect, useMemo, useRef, useState,
} from 'react';

import {
    LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES,
} from '../lib/ThemeContext';
import { CircularArray } from 'shared/lib/utils/collections/CircularArray/CircularArray';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES || THEMES.DARK;
export const ThemeProvider: FC = ({ children }) => {
    const themesCollection = useMemo(() => [
        THEMES.DARK,
        THEMES.LIGHT,
        THEMES.MINT,
    ], []);

    const themesRef = useRef<CircularArray<THEMES>>(new CircularArray<THEMES>(themesCollection));

    const [theme, setTheme] = useState<THEMES>(defaultTheme);

    const themeContextData = useMemo(() => ({
        theme,
        setTheme,
        themes: themesRef.current,
    }), [theme]);

    useEffect(() => {
        document.body.className = defaultTheme;
    }, []);

    useEffect(() => {
        themesRef.current.setPointer(themesCollection.indexOf(defaultTheme));
    }, [themesCollection]);

    return (
        <ThemeContext.Provider  value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    );
};

