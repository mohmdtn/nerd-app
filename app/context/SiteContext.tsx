"use client";

import React, { ReactNode, useState } from "react";

export const SiteContext = React.createContext<any>(null);

export const SiteProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const value = {
    isMenuOpen,
    setIsMenuOpen,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
