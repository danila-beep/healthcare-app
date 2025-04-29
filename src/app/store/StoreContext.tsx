"use client";

import { createContext, useContext } from "react";
import { RootStore, rootStore } from "./root.store";

const StoreContext = createContext<RootStore | null>(null);

export const StoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return store;
};
