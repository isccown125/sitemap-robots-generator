import { createContext, useState } from "react";
import { TabId } from "../types";

interface TabsContextType {
  activeTab: TabId;
  setActiveTab: (id: TabId) => void;
}

export const TabsContext = createContext<TabsContextType | null>(null);

export const TabsProvider: React.FC<{
  children: React.ReactNode;
  defaultTab?: TabId;
}> = ({ children, defaultTab = "sitemap" }) => {
  const [activeTab, setActiveTab] = useState<TabId>(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};
