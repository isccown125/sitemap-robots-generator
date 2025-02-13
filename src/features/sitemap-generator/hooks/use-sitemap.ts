import { useContext } from "react";
import { SitemapContext } from "../context";
import { SitemapUrl } from "../types";

export const useSitemap = () => {
  const context = useContext(SitemapContext);

  if (!context) {
    throw new Error("useSitemap must be used within a SitemapProvider");
  }

  const addUrlWithDefaults = (
    url: Partial<SitemapUrl> & Pick<SitemapUrl, "loc">
  ) => {
    const defaultUrl: SitemapUrl = {
      loc: url.loc,
      lastmod: url.lastmod || new Date().toISOString(),
      changefreq: url.changefreq || "monthly",
      priority: url.priority || 0.5,
    };
    context.addUrl(defaultUrl);
  };

  return {
    ...context,
    addUrl: addUrlWithDefaults,
  };
};
