import React, { createContext, useContext } from "react";
import { NAME } from "../utils/names";

type NameContextType = {
  currentName: NAME;
  setCurrentName: React.Dispatch<React.SetStateAction<NAME>>;
};

const NameContext = createContext<NameContextType | null>(null);

export const NameProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: NameContextType;
}) => <NameContext.Provider value={value}>{children}</NameContext.Provider>;

export const useName = () => {
  const ctx = useContext(NameContext);
  if (!ctx) throw new Error("useName must be used within NameProvider");
  return ctx;
};
