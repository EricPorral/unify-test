"use client"

import { ReactNode, createContext, useContext, useEffect, useState } from "react";


const STORAGE_KEY = 'themeContextKey';

export type ThemeContext = {
    theme: string;
    setTheme: (newTheme: string) => void;
}

export const ThemeCtx = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem(STORAGE_KEY) || 'light'
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return (
        <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>
    );
}

export const useTheme = () => useContext(ThemeCtx);
