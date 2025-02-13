import React from "react";
import { Tab, TabId } from "../types";
import { FiFileText, FiList, FiSettings } from "react-icons/fi";
import { SitemapGenerator } from "../../sitemap-generator";
import { UrlList } from "../../url-list/containers";
import { TabButton, TabContent, TabList, TabsContainer } from "../styles";
import { RobotsGenerator } from "../../robots-generator/containers/robots-generator";
import { useUrlState } from "../../../common/use-url-state";

export const TabContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useUrlState<TabId>({
    paramName: "tab",
    defaultValue: "sitemap",
    validator: (value) => ["sitemap", "robots", "urls"].includes(value),
  });

  const tabs: Tab[] = [
    {
      id: "sitemap",
      label: "Generator Sitemapy",
      icon: <FiFileText />,
    },
    {
      id: "robots",
      label: "Generator Robots.txt",
      icon: <FiSettings />,
    },
    {
      id: "urls",
      label: "Lista URL-i",
      icon: <FiList />,
    },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case "sitemap":
        return <SitemapGenerator />;
      case "robots":
        return <RobotsGenerator />;
      case "urls":
        return <UrlList />;
      default:
        return null;
    }
  };

  return (
    <div>
      <TabsContainer>
        <TabList>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              $active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </TabButton>
          ))}
        </TabList>
      </TabsContainer>
      <TabContent>{renderContent()}</TabContent>
    </div>
  );
};
