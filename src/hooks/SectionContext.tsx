import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { SECTION } from "../utils/sections";

type SectionContextType = {
  activeSection: SECTION;
  setActiveSection: React.Dispatch<React.SetStateAction<SECTION>>;
  navigateTo: (id: SECTION) => void;
};

export const SectionContext = createContext<SectionContextType | null>(null);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<SECTION>(SECTION.MAIN);

  const navigateTo = useCallback((id: SECTION) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
    try {
      window.history.replaceState(null, "", `#${id}`);
    } catch (e) {
      console.log("Failed to update URL hash", e);
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash && Object.values(SECTION).includes(hash as SECTION)) {
      setTimeout(() => navigateTo(hash as SECTION), 0);
    }

    const onHash = () => {
      const h = window.location.hash?.replace("#", "");
      if (h && Object.values(SECTION).includes(h as SECTION)) {
        setActiveSection(h as SECTION);
        const el = document.getElementById(h as SECTION);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [navigateTo]);

  return (
    <SectionContext.Provider
      value={{ activeSection, setActiveSection, navigateTo }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error("useSection must be used inside SectionProvider");
  return ctx;
};
