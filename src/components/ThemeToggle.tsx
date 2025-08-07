import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    
    // Apply theme to document
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Save to localStorage
    localStorage.setItem("theme", newTheme);
    
    // Apply to document
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button
      variant="cloud"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-300"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${
        theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
      }`} />
      <Moon className={`absolute h-5 w-5 transition-all duration-300 ${
        theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
      }`} />
    </Button>
  );
};

export default ThemeToggle;