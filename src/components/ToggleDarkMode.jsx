import {UseToggleDarkMode} from "../hooks/UseToggleDarkMode";

export default function ToggleDarkMode() {
    const {theme, handleToggleTheme} = UseToggleDarkMode()

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
