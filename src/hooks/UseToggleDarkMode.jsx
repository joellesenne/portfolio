import { useEffect, useState } from "react";

export const UseToggleDarkMode = () => {
    const [theme, setTheme] = useState('dark');
    const prefersDarkMQ = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = prefersDarkMQ.matches ? 'dark' : 'light';

    useEffect(() => {
        if (localStorage.theme) {
            setTheme(systemTheme);
        }
    }, [systemTheme]);

    const handleToggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        if (theme === systemTheme) {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', theme);
        }
    });

    return { theme, handleToggleTheme }
}