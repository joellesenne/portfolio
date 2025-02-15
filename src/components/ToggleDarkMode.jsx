import {useToggleDarkMode} from "../hooks/useToggleDarkMode.jsx";

export default function ToggleDarkMode() {
    const {theme, handleToggleTheme} = useToggleDarkMode()

    return (
        <button
            onClick={handleToggleTheme}
            type="button"
            className="slider-link"
        >
            {theme === 'dark' ? 'light mode' : 'dark mode'}
        </button>
    );
};
