import { useContext } from "react";
import { TabsContext } from "../context";

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within TabsProvider");
  }
  return context;
};
