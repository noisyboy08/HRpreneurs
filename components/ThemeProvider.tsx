"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

export type Theme = "sand" | "dark" | "purple" | "mint" | "sun" | "coral";

export const themes: { id: Theme; label: string; swatch: string; accent: string }[] = [
  { id: "sand",   label: "Sand",   swatch: "#F2EDE9", accent: "#D68BE7" },
  { id: "dark",   label: "Dark",   swatch: "#0E0A14", accent: "#D68BE7" },
  { id: "purple", label: "Purple", swatch: "#D68BE7", accent: "#0E0A14" },
  { id: "mint",   label: "Mint",   swatch: "#B4E4B8", accent: "#2DB87F" },
  { id: "sun",    label: "Sun",    swatch: "#FFD56E", accent: "#D66A2E" },
  { id: "coral",  label: "Coral",  swatch: "#FF9F8A", accent: "#4A1E9E" },
];

const Ctx = createContext<{
  theme: Theme;
  cycle: () => void;
  setTheme: (t: Theme) => void;
  isTransitioning: boolean;
}>({ theme: "sand", cycle: () => {}, setTheme: () => {}, isTransitioning: false });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("sand");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [curtainTheme, setCurtainTheme] = useState<Theme>("sand");
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const saved = (localStorage.getItem("hrp-theme") as Theme | null);
    if (saved && themes.some(t => t.id === saved)) {
      setThemeState(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "sand");
    }
  }, []);

  const applyTheme = (next: Theme) => {
    setCurtainTheme(next);
    setIsTransitioning(true);
    setTimeout(() => {
      setThemeState(next);
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("hrp-theme", next);
    }, 350);
    setTimeout(() => setIsTransitioning(false), 900);
  };

  const cycle = () => {
    const idx = themes.findIndex(t => t.id === theme);
    applyTheme(themes[(idx + 1) % themes.length].id);
  };

  const setTheme = (t: Theme) => applyTheme(t);

  const curtainColor = themes.find(t => t.id === curtainTheme)?.swatch || "#D68BE7";

  return (
    <Ctx.Provider value={{ theme, cycle, setTheme, isTransitioning }}>
      {children}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2000,
          pointerEvents: "none",
          background: curtainColor,
          clipPath: isTransitioning
            ? "circle(150% at 90% 5%)"
            : "circle(0% at 90% 5%)",
          transition: "clip-path 0.85s cubic-bezier(.77,0,.18,1)",
        }}
      />
    </Ctx.Provider>
  );
}

export const useTheme = () => useContext(Ctx);
