import React, { useState } from "react";
import { SharedUrlData, UrlContextType } from "../types";
import { UrlContext } from "./url.context";

export const UrlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [urls, setUrls] = useState<SharedUrlData[]>([]);

  const addUrl = (urlData: SharedUrlData) => {
    setUrls((prev) => {
      if (!prev.some((u) => u.url === urlData.url)) {
        return [...prev, urlData];
      }
      return prev;
    });
  };

  const removeUrl = (url: string) => {
    setUrls((prev) => prev.filter((u) => u.url !== url));
  };

  const updateUrl = (url: string, data: Partial<SharedUrlData>) => {
    setUrls((prev) => prev.map((u) => (u.url === url ? { ...u, ...data } : u)));
  };

  const value: UrlContextType = {
    urls,
    addUrl,
    removeUrl,
    updateUrl,
  };

  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
};
