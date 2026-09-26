
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-slate-200
        bg-white
        text-lg
        shadow-sm
        transition
        hover:scale-105
        dark:border-slate-600
        dark:bg-slate-800
      "
      aria-label="Toggle dark mode"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

