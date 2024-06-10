'use client';

import React, { createContext, useCallback, useState } from 'react';

export type SidebarContextType = {
  toggleSidebarOpen: () => void;
  isOpen: boolean;
};

const SidebarContext = createContext<SidebarContextType>({
  toggleSidebarOpen: () => ({}),
  isOpen: false,
});

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpens] = useState(false);

  const toggleSidebarOpen = useCallback(() => {
    setIsOpens(value => !value);
  }, [isOpen, setIsOpens]);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
