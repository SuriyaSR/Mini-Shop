import { useEffect, useState } from "react";

export function useDarkMode () {

    const getThemeValue = () => {
        if(typeof window === "undefined") return false;
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme) 
            return storedTheme === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    const [isDark, setIsDark] = useState(getThemeValue);

    const toggleMode = () => {
        setIsDark(prev => !prev)
    }

    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark])

    return {isDark, toggleMode};
}