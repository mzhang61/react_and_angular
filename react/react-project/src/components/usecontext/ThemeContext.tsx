import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);


export function ThemeProvider( { children }: { children: ReactNode }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}