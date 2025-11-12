import { useTheme } from "./ThemeContext";

export default function ThemePage() {
    const { theme, toggleTheme } = useTheme();

    const bg = theme === "light" ? "#f5f5f5" : "#222";
    const color = theme === "light" ? "#000" : "#fff";

    return (
        <div style={{ background: bg, color, padding: 30, minHeight: 200 }}>
            <h2>Simple Theme Context</h2>
            <p>Current theme: <strong>{theme}</strong></p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}