import React from "react";
import { SitemapContext } from "./sitemap.context";
import { SitemapUrl } from "../types";
import { useLocalStorage } from "../../../common/use-local-storage";

const STORAGE_KEY = "sitemap_urls";

export const SitemapProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { value: urls, setValue: setUrls } = useLocalStorage<SitemapUrl[]>(
    STORAGE_KEY,
    []
  );

  const addUrl = (url: SitemapUrl) => {
    setUrls((prevUrls) => {
      if (!prevUrls.some((u) => u.loc === url.loc)) {
        return [...prevUrls, url];
      }
      return prevUrls;
    });
  };

  const removeUrl = (urlLoc: string) => {
    setUrls((prevUrls) => prevUrls.filter((url) => url.loc !== urlLoc));
  };

  const updateUrl = (oldUrlLoc: string, updatedFields: Partial<SitemapUrl>) => {
    setUrls((prevUrls) => {
      const updatedUrls = prevUrls.filter((url) => url.loc !== oldUrlLoc);
      const urlToUpdate = prevUrls.find((url) => url.loc === oldUrlLoc);

      if (urlToUpdate) {
        const updatedUrl = {
          ...urlToUpdate,
          ...updatedFields,
        };
        return [...updatedUrls, updatedUrl];
      }

      return prevUrls;
    });
  };

  const generateXml = (): string => {
    const xmlUrls = urls
      .map(
        (url) => `
      <url>
        <loc>${url.loc}</loc>
        ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
        ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ""}
        ${url.priority ? `<priority>${url.priority}</priority>` : ""}
      </url>
    `
      )
      .join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${xmlUrls}
      </urlset>`;
  };

  return (
    <SitemapContext.Provider
      value={{ urls, addUrl, removeUrl, updateUrl, generateXml }}
    >
      {children}
    </SitemapContext.Provider>
  );
};
