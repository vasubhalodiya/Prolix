import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // ✅ First load pe localStorage se theme lo, warna default 'dark'
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // ✅ theme permanently save hoti hai
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch to 🌙 Dark Mode" : "Switch to ☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
